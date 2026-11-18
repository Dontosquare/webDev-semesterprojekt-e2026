'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Brands', [
      { id: 1, name: 'Nintendo', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: 'Sega', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, name: 'Sony', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Brands', null, {});
  }
};
