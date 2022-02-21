

const Product = require("./Product");
const Location = require("./Location");
const Vendor = require("./Vendor");
// Product.hasOne(Vendor);

Product.hasMany(Location);

// Location.belongsTo(Product);

// Vendor.hasMany(Product);




module.exports = { Product, Location, Vendor };