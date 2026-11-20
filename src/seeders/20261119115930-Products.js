'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    await queryInterface.bulkInsert('Products', [
      {
        name: 'Super Nintendo Entertainment System',
        sku: 'CON-SNES-001',
        price: 1299.95,
        brandId: 1,
        categoryId: 1,
        color: 'Grå',
        description: '16-bit konsol fra 1990, testet og rengjort. Leveres med strømforsyning, AV-kabel og én controller.',
        imagePath: '/img/snes.png',
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Nintendo Entertainment System',
        sku: 'CON-NES-001',
        price: 899.95,
        brandId: 1,
        categoryId: 1,
        color: 'Grå',
        description: '8-bit konsol fra 1987, testet og rengjort. Leveres med strømforsyning, AV-kabel og én controller.',
        imagePath: '/img/nes.png',
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Nintendo 64',
        sku: 'CON-N64-001',
        price: 1099.95,
        brandId: 1,
        categoryId: 1,
        color: 'Grå',
        description: '64-bit konsol fra 1996, testet og rengjort. Leveres med strømforsyning, AV-kabel og én controller.',
        imagePath: '/img/n64.png',
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Nintendo 64',
        sku: 'CON-N64-002',
        price: 1199.95,
        brandId: 1,
        categoryId: 1,
        color: 'Gul',
        description: '64-bit konsol fra 1996, testet og rengjort. Leveres med strømforsyning, AV-kabel og én controller.',
        imagePath: '/img/n64-yellow.png',
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Game Boy Color',
        sku: 'CON-GBC-001',
        price: 549.95,
        brandId: 1,
        categoryId: 1,
        color: 'Transparent lilla',
        description: 'Håndholdt konsol fra 1998, testet og rengjort. Skærm uden ridser. Batterier medfølger ikke.',
        imagePath: '/img/game-boy-color.png',
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Sega Mega Drive',
        sku: 'CON-MD-001',
        price: 999.95,
        brandId: 2,
        categoryId: 1,
        color: 'Sort',
        description: '16-bit konsol fra 1988, testet og rengjort. Leveres med strømforsyning, AV-kabel og to controllere.',
        imagePath: '/img/mega-drive.png',
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Sega Dreamcast',
        sku: 'CON-DC-001',
        price: 1199.95,
        brandId: 2,
        categoryId: 1,
        color: 'Hvid',
        description: '128-bit konsol fra 1999, testet og rengjort. Leveres med strømforsyning, AV-kabel og én controller.',
        imagePath: '/img/dreamcast.png',
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Sony PlayStation',
        sku: 'CON-PS1-001',
        price: 799.95,
        brandId: 3,
        categoryId: 1,
        color: 'Grå',
        description: '32-bit konsol fra 1994, testet og rengjort. Leveres med strømforsyning, AV-kabel og én controller.',
        imagePath: '/img/ps1.png',
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Sony PlayStation 2',
        sku: 'CON-PS2-001',
        price: 699.95,
        brandId: 3,
        categoryId: 1,
        color: 'Sort',
        description: 'Konsol fra 2000, testet og rengjort. Leveres med strømforsyning, AV-kabel og én controller.',
        imagePath: '/img/ps2.png',
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Super Mario World',
        sku: 'GAM-SNES-001',
        price: 349.95,
        brandId: 1,
        categoryId: 2,
        color: null,
        description: 'Klassisk platformspil til SNES. PAL, kun modul. Testet og fungerer perfekt.',
        imagePath: '/img/super-mario-world.png',
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'AV-kabel til SNES/N64/GameCube',
        sku: 'ACC-AV-001',
        price: 129.95,
        brandId: 1,
        categoryId: 3,
        color: null,
        description: 'Original-kompatibelt AV-kabel med composite-stik (gul/hvid/rød), 1,8 m. Passer til SNES, N64 og GameCube.',
        imagePath: '/img/av-kabel.png',
        createdAt: now,
        updatedAt: now
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
