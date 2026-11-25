'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    await queryInterface.bulkInsert('Stocks', [
      { quantity: 3, productId: 1, createdAt: now, updatedAt: now },   // SNES
      { quantity: 4, productId: 2, createdAt: now, updatedAt: now },   // NES
      { quantity: 2, productId: 3, createdAt: now, updatedAt: now },   // N64 grå
      { quantity: 1, productId: 4, createdAt: now, updatedAt: now },   // N64 gul
      { quantity: 3, productId: 5, createdAt: now, updatedAt: now },   // Game Boy Color
      { quantity: 2, productId: 6, createdAt: now, updatedAt: now },   // Mega Drive
      { quantity: 2, productId: 7, createdAt: now, updatedAt: now },   // Dreamcast
      { quantity: 5, productId: 8, createdAt: now, updatedAt: now },   // PS1
      { quantity: 6, productId: 9, createdAt: now, updatedAt: now },   // PS2
      { quantity: 4, productId: 10, createdAt: now, updatedAt: now },  // Super Mario World
      { quantity: 20, productId: 11, createdAt: now, updatedAt: now },  // AV-kabel
      { quantity: 0, productId: 12, createdAt: now, updatedAt: now }  // Sonic the Hedgehog
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Stocks', null, {});
  }
};
