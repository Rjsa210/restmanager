const {DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");


class Product extends Model {}

Product.init({
  //Product attributes defined here ID, Name, Price, Category, Pack size, count size, storage location, Storage, vendor, item number, locations
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "uncategorized",

  },
  pack_size: {
    type: DataTypes.STRING,

  },
  count_size: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pack_price: {
    type: DataTypes.DECIMAL(7,2),
    allowNull: false,
    defaultValue: 0.00
  },
  count_price: {
    type: DataTypes.DECIMAL(7,2),
    allowNull: false,
    defaultValue: 0.00
  },
  storage_location: {
    type: DataTypes.STRING,
  },
  // vendor: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: "Vendor",
  //     key: "id"
  //   }
  // },
  // locations: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: 'Location',
  //     key: "id"
  //   }
  // }
  // unique: {
  //   type: DataTypes.UUIDV4,
  //   allowNull: false,
  //   autoIncrement: true,
  // } 
}, {
  sequelize,
  timestamps: false,
  
});

module.exports = Product;