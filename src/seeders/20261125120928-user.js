'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    const now = new Date();

    await queryInterface.bulkInsert('Users', [
      {
        email: 'joachim@example.com',
        createdAt: now,
        updatedAt: now
      },
      {
        email: 'bruger@example.com',
        createdAt: now,
        updatedAt: now
      },
      {
        email: 'guest@example.com',
        createdAt: now,
        updatedAt: now
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
