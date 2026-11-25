'use strict';

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {
    const now = new Date();
    const passwordHash = await bcrypt.hash('password123', 10);

    await queryInterface.bulkInsert('Users', [
      {
        name: 'Joachim Admin',
        email: 'joachim@example.com',
        password: passwordHash,
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Test User',
        email: 'bruger@example.com',
        password: passwordHash,
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Guest',
        email: 'guest@example.com',
        password: passwordHash,
        createdAt: now,
        updatedAt: now
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
