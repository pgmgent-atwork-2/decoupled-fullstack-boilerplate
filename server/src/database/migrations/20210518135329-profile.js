import 'babel-polyfill';

import database from '../index';
database.connect();

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(database.Profile.tableName, database.Profile.attributes);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(database.Profile.tableName);
  }
};