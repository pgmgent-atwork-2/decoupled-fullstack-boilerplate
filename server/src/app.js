import bodyParser from 'body-parser';
import chalk from 'chalk';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import path from 'path';
import moment  from 'moment';
import morgan  from 'morgan';
import nunjucks from 'nunjucks';

/*
Custom modules
*/
import { EnvironmentVariables } from './config';
import apiRoutes from './api/routes';

/*
Database
*/
import database from './database';
database.connect();

/*
Create Express app
*/
const app = express();

/*
View Engine
*/
nunjucks.configure(path.join(__dirname, 'views'), {
	autoescape: true,
	express: app,
	noCache: true,
	watch: true,
});
app.set('view engine', 'html');

/*
bodyParser
*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*
Helmet
https://helmetjs.github.io/
*/
app.use(helmet.hidePoweredBy());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.xssFilter());

/*
Morgan
https://www.npmjs.com/package/morgan
*/
if (EnvironmentVariables.NODE_ENV === 'development') {
  const morganMiddleware = morgan((tokens, req, res) => {
    return [
      chalk.hex('#ffffff').bold(`${moment(tokens.date(req, res)).format('YYYY-MM-DD hh:mm:ss')}`),
      chalk.hex('#34ace0').bold(`[${tokens.method(req, res)}]`),
      ':\t',
      chalk.hex('#ff5252').bold(`[${tokens.url(req, res)}]`),
      chalk.hex('#f78fb3').bold(`[${tokens.status(req, res)}]`),
      chalk.hex('#fffff').bold(`${tokens['response-time'](req, res)}ms`),
      chalk.hex('#fffff').bold(tokens['remote-addr'](req, res)),
      '',
    ].join(' ');
  }); 
  app.use(morganMiddleware);
}

/*
API Routes
*/
app.use('/api', cors(), apiRoutes);

/*
Start the server
Listen to incoming requests
*/
let server;
if (EnvironmentVariables.NODE_ENV !== 'test') {
	server = app.listen(EnvironmentVariables.PORT, EnvironmentVariables.HOSTNAME, (err) => {
		if (err) throw err;
		if (EnvironmentVariables.NODE_ENV === 'development') {
			console.log(`Server is listening at http://${EnvironmentVariables.HOSTNAME}:${EnvironmentVariables.PORT}!`);
		}
	});
}

/*
Handle shutdown gracefully
*/
const handleGracefully = async () => {
	try {
		await server.close(async (err) => {
			if (err) throw err;

			if (EnvironmentVariables.NODE_ENV === 'development') {
				console.log('Server is gracefully closed!');
			}
			process.exit(0);
		});
	} catch (ex) {
		console.error(ex);
	}
};

/*
Shutdown the application
*/
process.on('SIGINT', () => {
	handleGracefully();
});
process.on('SIGTERM', () => {
	handleGracefully();
});
