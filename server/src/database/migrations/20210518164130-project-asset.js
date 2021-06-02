import 'babel-polyfill';

import database from '../index';
database.connect();

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(database.ProjectAsset.tableName, database.ProjectAsset.attributes);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(database.ProjectAsset.tableName);
  },
};
