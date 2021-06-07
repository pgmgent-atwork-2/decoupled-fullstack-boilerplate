// import/no-extraneous-dependencies
import 'babel-polyfill';
import faker from 'faker';
<<<<<<< HEAD
=======

>>>>>>> 6706c398877e6e0a1efd2dbb37dc3f4a066ef32f
import database from '../index';

database.connect();

const getCategories = (n = 20) => {
  const categories = [];
  for (let i = 0; i < n; i++) {
    categories.push({
      name: faker.lorem.word(),
      description: faker.lorem.sentence(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  return categories;
};

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      database.Category.tableName,
      getCategories(15),
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(database.Category.tableName, null, {});
  },
};
