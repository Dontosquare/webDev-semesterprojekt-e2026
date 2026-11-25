'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    await queryInterface.bulkInsert('Colors', [
      { id: 1, name: 'Grå', createdAt: now, updatedAt: now },
      { id: 2, name: 'Gul', createdAt: now, updatedAt: now },
      { id: 3, name: 'Transparent lilla', createdAt: now, updatedAt: now },
      { id: 4, name: 'Sort', createdAt: now, updatedAt: now },
      { id: 5, name: 'Hvid', createdAt: now, updatedAt: now }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Colors', null, {});
  }
};
