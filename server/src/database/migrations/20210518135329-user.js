import 'babel-polyfill';

import database from '../index';
database.connect();

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(database.User.tableName, database.User.attributes);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(database.User.tableName);
  }
};