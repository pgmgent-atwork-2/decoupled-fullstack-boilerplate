import 'babel-polyfill';

import database from '../index';
database.connect();

export default {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable(database.ProjectAsset.tableName, database.ProjectAsset.attributes);
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable(database.ProjectAsset.tableName);
  }
};