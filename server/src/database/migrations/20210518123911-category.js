import 'babel-polyfill';

import database from '../index';

database.connect();

export default {
  up: async (queryInterface, Sequelize) => {
    console.log(database.Category.attributes);
    await queryInterface.createTable(database.Category.tableName, database.Category.attributes);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(database.Category.tableName);
  },
};
