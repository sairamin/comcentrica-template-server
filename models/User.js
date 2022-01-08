const { DataTypes } = require("sequelize");
const db = require("../config/database");

const User = db.define("users", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

module.exports = User;
