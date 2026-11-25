'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StockMovement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      StockMovement.belongsTo(models.Stock, { foreignKey: "stockId"})
    }
  }
  StockMovement.init({
    change: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'StockMovement',
  });
  return StockMovement;
};