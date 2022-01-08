const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("comcentrica", "postgres", "Sukiindia03", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
