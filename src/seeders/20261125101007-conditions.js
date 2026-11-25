'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    await queryInterface.bulkInsert('Conditions', [
      { id: 1, name: 'Ny', createdAt: now, updatedAt: now },
      { id: 2, name: 'Som ny', createdAt: now, updatedAt: now },
      { id: 3, name: 'Brugt', createdAt: now, updatedAt: now },
      { id: 4, name: 'Til reservedele', createdAt: now, updatedAt: now }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Conditions', null, {});
  }
};
