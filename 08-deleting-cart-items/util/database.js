const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("node-conplete", "root", "austiniqer", {
  dialect: "mysql",
  host: "localhost",
});


module.exports = sequelize;