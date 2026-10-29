'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Super Nintendo Entertainment System',
        sku: 'CON-SNES-001',
        price: 1299.95,
        brand: 'Nintendo',
        variation: 'Grå, inkl. 1 controller',
        category: 'Retro konsoller',
        description: '16-bit konsol fra 1990, testet og rengjort. Leveres med strømforsyning, AV-kabel og én controller.',
        imagepath: '/img/snes.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sega Mega Drive',
        sku: 'CON-MD-001',
        price: 999.95,
        brand: 'Sega',
        variation: 'Sort, inkl. 2 controllere',
        category: 'Retro konsoller',
        description: '16-bit konsol fra 1988, testet og rengjort. Leveres med strømforsyning, AV-kabel og to controllere.',
        imagepath: '/img/mega-drive.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('People', null, {});
  }
};
