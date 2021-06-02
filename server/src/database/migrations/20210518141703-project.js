import 'babel-polyfill';

import database from '../index';
database.connect();

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(database.Project.tableName, database.Project.attributes);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(database.Project.tableName);
  }
};