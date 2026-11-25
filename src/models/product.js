'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, { foreignKey: "categoryId" })
      Product.belongsTo(models.Brand, { foreignKey: "brandId" })
      Product.belongsTo(models.Color, { foreignKey: "colorId" })
      Product.belongsTo(models.Condition, { foreignKey: "conditionId" })
      Product.hasMany(models.Image, { foreignKey: "productId" })
      Product.hasOne(models.Stock, {foreignKey: "productId"})
    }
  }
  Product.init({
    name: DataTypes.STRING,
    sku: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    description: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};