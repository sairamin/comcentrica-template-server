const { DataTypes } = require("sequelize");
const db = require("../config/database");

const Template = db.define("templates", {
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Template;
