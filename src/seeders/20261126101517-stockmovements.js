'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    // Positivt tal = indkøb, negativt tal = salg.
    // Summen pr. stockId matcher quantity i stocks-seederen.
    const movements = [
      { stockId: 1, change: 5 }, { stockId: 1, change: -2 },    // = 3
      { stockId: 2, change: 4 },                                // = 4
      { stockId: 3, change: 3 }, { stockId: 3, change: -1 },    // = 2
      { stockId: 4, change: 2 }, { stockId: 4, change: -1 },    // = 1
      { stockId: 5, change: 3 },                                // = 3
      { stockId: 6, change: 4 }, { stockId: 6, change: -2 },    // = 2
      { stockId: 7, change: 2 },                                // = 2
      { stockId: 8, change: 6 }, { stockId: 8, change: -1 },    // = 5
      { stockId: 9, change: 6 },                                // = 6
      { stockId: 10, change: 5 }, { stockId: 10, change: -1 },  // = 4
      { stockId: 11, change: 25 }, { stockId: 11, change: -5 },  // = 20
    ];

    await queryInterface.bulkInsert(
      'StockMovements',
      movements.map((movement) => ({ ...movement, createdAt: now, updatedAt: now }))
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('StockMovements', null, {});
  }
};
