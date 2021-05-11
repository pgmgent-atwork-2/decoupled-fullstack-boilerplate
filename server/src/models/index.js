import { Sequelize, DataTypes } from 'sequelize';

import { databaseVariables, EnvironmentVariables } from '../config';

const sequelize = new Sequelize(databaseVariables[EnvironmentVariables.NODE_ENV]);
const database = {};

database.sequelize = sequelize;
database.Sequelize = Sequelize;

database.Category = require('./category.model.js')(sequelize, DataTypes);
database.Product = require('./product.model.js')(sequelize, DataTypes);

database.Category.belongsToMany(database.Product, { through: 'ProductCategory' });
database.Product.belongsToMany(database.Category, { through: 'ProductCategory' });

export default database;
