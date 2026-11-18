'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      { id: 1, name: 'Retro konsoller', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: 'Retro spil', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, name: 'Tilbehør', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
