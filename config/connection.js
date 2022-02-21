const path = require("path");
const Sequelize = require("sequelize");

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
// require("dotenv").config();
console.log(process.env.DB_NAME);

let sequelize;

if (process.env.JAWSDB_URL) {
  // if connected build from deployed database via jawsDB
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // else build with name, user, pw on local host port 3306
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306
    }
  )
}

// sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PW,
//   {
//     host: "localhost",
//     dialect: "mysql",
//     port: 3306
//   }
// )

module.exports = sequelize;