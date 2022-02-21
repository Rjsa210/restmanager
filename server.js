const express = require("express");
const session = require("express-session");

const path = require("path");

/* establish Routes, comment out during setup*/
const routes = require("./routes");

require("dotenv").config();



const PORT = process.env.PORT || 3001;

const app = express();



/* sequelize setup, uncomment later */

const sequelize = require("./config/connection");
const sequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: process.env.MY_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new sequelizeStore({
    db: sequelize
  })
};


/* Define Middleware */
app.use(session(sess));

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(routes);

/* Serve static assets (i.e. Heroku)*/
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

if (process.env.NODE_ENV === "production") {
  app.use('/', express.static(path.join(__dirname, '/client/build')));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));

})

/* Server listener pre-sequelize */
// app.listen(PORT, () => {
//   console.log(`Hello World 🌍 ==> API server on port ${PORT}`);
// })

/* Server listener post-sequelize, uncomment after sequelize is set up */
sequelize.sync({force: false}).then(() => {
  app.listen(PORT, () => console.log(`Hello World 🌎 ==> DB Synced... API server now on port ${PORT}!`));
});