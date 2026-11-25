'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Stock.belongsTo(models.Product, { foreignKey: "productId" })
      Stock.hasMany(models.StockMovement, {foreignKey: "stockId"})
    }
  }
  Stock.init({
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Stock',
  });
  return Stock;
};