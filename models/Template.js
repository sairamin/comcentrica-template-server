const { DataTypes } = require("sequelize");
const db = require("../config/database");

const Template = db.define("templates", {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
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
