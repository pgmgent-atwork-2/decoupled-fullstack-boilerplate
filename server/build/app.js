"use strict";

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

var _helmet = _interopRequireDefault(require("helmet"));

var _http = _interopRequireDefault(require("http"));

var _path = _interopRequireDefault(require("path"));

var _nunjucks = _interopRequireDefault(require("nunjucks"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _terminus = require("@godaddy/terminus");

var _config = require("./config");

var _middleware = require("./middleware");

var _routes = _interopRequireDefault(require("./api/routes"));

var _database = _interopRequireDefault(require("./database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_database["default"].connect();
/*
Create Express app
*/


var app = (0, _express["default"])();
/*
View Engine
*/

_nunjucks["default"].configure(_path["default"].join(__dirname, 'views'), {
  autoescape: true,
  express: app,
  noCache: true,
  watch: true
});

app.set('view engine', 'html');
/*
bodyParser
*/

app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json());
/*
Helmet
https://helmetjs.github.io/
*/

app.use(_helmet["default"].hidePoweredBy());
app.use(_helmet["default"].ieNoOpen());
app.use(_helmet["default"].noSniff());
app.use(_helmet["default"].xssFilter());
/*
Morgan
https://www.npmjs.com/package/morgan
*/

if (_config.EnvironmentVariables.NODE_ENV === 'development') {
  app.use(_middleware.morganMiddleware);
}
/*
API Routes
*/


app.use('/api', (0, _cors["default"])(), _routes["default"]);
/*
Swagger
*/

app.use('/api/docs', _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(_middleware.swaggerSpec));
/*
Not Found routes
*/

app.get('*', function (req, res, next) {
  var err = new Error("".concat(req.ip, " tried to access ").concat(req.originalUrl));
  err.statusCode = 301;
  next(err);
});
/*
Error Handling
*/

app.use(function (err, req, res, next) {
  var error = err;
  error.statusCode = error.statusCode || 500;
  res.status(error.statusCode);
  var body = {
    url: req.url,
    error: {
      message: error.message,
      statusCode: error.statusCode
    }
  };

  if (req.accepts('json')) {
    res.json(body);
  } else if (req.accepts('html')) {
    res.render('error', body);
  } else {
    res.send('You have to accept application/json or text/html!');
  }

  next();
});
/*
Create the server
*/

var server = _http["default"].createServer(app);
/*
Shutdown the application gracefully
*/


var onSignal = function onSignal() {
  console.log('server is starting cleanup'); // start cleanup of resource, like databases or file descriptors
};

var onHealthCheck = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function onHealthCheck() {
    return _ref.apply(this, arguments);
  };
}();

(0, _terminus.createTerminus)(server, {
  signal: 'SIGINT',
  healthChecks: {
    '/healthcheck': onHealthCheck
  },
  onSignal: onSignal
});
/*
Server
Listen to incoming requests
*/

if (_config.EnvironmentVariables.NODE_ENV !== 'test') {
  server.listen(_config.EnvironmentVariables.PORT, _config.EnvironmentVariables.HOSTNAME, function (err) {
    if (err) throw err;

    if (_config.EnvironmentVariables.NODE_ENV === 'development') {
      console.log("Server is listening at http://".concat(_config.EnvironmentVariables.HOSTNAME, ":").concat(_config.EnvironmentVariables.PORT, "!"));
    }
  });
}