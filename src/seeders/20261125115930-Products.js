'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    await queryInterface.bulkInsert('Products', [
      {
        id: 1,
        name: 'Super Nintendo Entertainment System',
        sku: 'CON-SNES-001',
        price: 1299.95,
        brandId: 1,
        categoryId: 1,
        colorId: 1,
        conditionId: 2,
        description: '16-bit konsol fra 1990, testet og rengjort. Leveres med strømforsyning, AV-kabel og én controller.',
        imagePath: '/img/snes.png',
        createdAt: now,
        updatedAt: now
      },
      {
        id: 2,
        name: 'Nintendo Entertainment System',
        sku: 'CON-NES-001',
        price: 899.95,
        brandId: 1,
        categoryId: 1,
        colorId: 1,
        conditionId: 3,
        description: '8-bit konsol fra 1987, testet og rengjort. Leveres med strømforsyning, AV-kabel og én controller.',
        imagePath: '/img/nes.png',
        createdAt: now,
        updatedAt: now
      },
      {
        id: 3,
        name: 'Nintendo 64',
        sku: 'CON-N64-001',
        price: 1099.95,
        brandId: 1,
        categoryId: 1,
        colorId: 1,
        conditionId: 3,
        description: '64-bit konsol fra 1996, testet og rengjort. Leveres med strømforsyning, AV-kabel og én controller.',
        imagePath: '/img/n64.png',
        createdAt: now,
        updatedAt: now
      },
      {
        id: 4,
        name: 'Nintendo 64',
        sku: 'CON-N64-002',
        price: 1199.95,
        brandId: 1,
        categoryId: 1,
        colorId: 2,
        conditionId: 2,
        description: '64-bit konsol fra 1996, testet og rengjort. Leveres med strømforsyning, AV-kabel og én controller.',
        imagePath: '/img/n64-yellow.png',
        createdAt: now,
        updatedAt: now
      },
      {
        id: 5,
        name: 'Game Boy Color',
        sku: 'CON-GBC-001',
        price: 549.95,
        brandId: 1,
        categoryId: 1,
        colorId: 3,
        conditionId: 3,
        description: 'Håndholdt konsol fra 1998, testet og rengjort. Skærm uden ridser. Batterier medfølger ikke.',
        imagePath: '/img/game-boy-color.png',
        createdAt: now,
        updatedAt: now
      },
      {
        id: 6,
        name: 'Sega Mega Drive',
        sku: 'CON-MD-001',
        price: 999.95,
        brandId: 2,
        categoryId: 1,
        colorId: 4,
        conditionId: 3,
        description: '16-bit konsol fra 1988, testet og rengjort. Leveres med strømforsyning, AV-kabel og to controllere.',
        imagePath: '/img/mega-drive.png',
        createdAt: now,
        updatedAt: now
      },
      {
        id: 7,
        name: 'Sega Dreamcast',
        sku: 'CON-DC-001',
        price: 1199.95,
        brandId: 2,
        categoryId: 1,
        colorId: 5,
        conditionId: 2,
        description: '128-bit konsol fra 1999, testet og rengjort. Leveres med strømforsyning, AV-kabel og én controller.',
        imagePath: '/img/dreamcast.png',
        createdAt: now,
        updatedAt: now
      },
      {
        id: 8,
        name: 'Sony PlayStation',
        sku: 'CON-PS1-001',
        price: 799.95,
        brandId: 3,
        categoryId: 1,
        colorId: 1,
        conditionId: 3,
        description: '32-bit konsol fra 1994, testet og rengjort. Leveres med strømforsyning, AV-kabel og én controller.',
        imagePath: '/img/ps1.png',
        createdAt: now,
        updatedAt: now
      },
      {
        id: 9,
        name: 'Sony PlayStation 2',
        sku: 'CON-PS2-001',
        price: 699.95,
        brandId: 3,
        categoryId: 1,
        colorId: 4,
        conditionId: 3,
        description: 'Konsol fra 2000, testet og rengjort. Leveres med strømforsyning, AV-kabel og én controller.',
        imagePath: '/img/ps2.png',
        createdAt: now,
        updatedAt: now
      },
      {
        id: 10,
        name: 'Super Mario World',
        sku: 'GAM-SNES-001',
        price: 349.95,
        brandId: 1,
        categoryId: 2,
        colorId: null,
        conditionId: 3,
        description: 'Klassisk platformspil til SNES. PAL, kun modul. Testet og fungerer perfekt.',
        imagePath: '/img/super-mario-world.png',
        createdAt: now,
        updatedAt: now
      },
      {
        id: 11,
        name: 'AV-kabel til SNES/N64/GameCube',
        sku: 'ACC-AV-001',
        price: 129.95,
        brandId: 1,
        categoryId: 3,
        colorId: null,
        conditionId: 1,
        description: 'Original-kompatibelt AV-kabel med composite-stik (gul/hvid/rød), 1,8 m. Passer til SNES, N64 og GameCube.',
        imagePath: '/img/av-kabel.png',
        createdAt: now,
        updatedAt: now
      },
      {
        id: 12,
        name: 'Sonic the Hedgehog',
        sku: 'GAM-MD-TEST-001',
        price: 249.95,
        brandId: 2,
        categoryId: 2,
        colorId: null,
        conditionId: 3,
        description: 'Testprodukt uden lagerstatus. Bruges til at teste visningen af produkter uden Stock.',
        imagePath: '/img/sonic.png',
        createdAt: now,
        updatedAt: now
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
