const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");

class Location extends Model { }

Location.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,

  },
  location_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
  // products: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: "Product",
  //     key: "id"
  //   }
  // }

},
{
  sequelize,
  timestamps: false,
  freezeTableName: true
});

module.exports = Location;