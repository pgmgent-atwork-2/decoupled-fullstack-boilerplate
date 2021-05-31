import 'babel-polyfill';

import database from '../index';
database.connect();

export default {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable(database.Project.tableName, database.Project.attributes);
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable(database.Project.tableName);
  }
};