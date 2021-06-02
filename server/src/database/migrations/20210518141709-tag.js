import 'babel-polyfill';

import database from '../index';

database.connect();

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(database.Tag.tableName, database.Tag.attributes);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(database.Tag.tableName);
  },
};
