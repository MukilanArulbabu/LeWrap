const sequelize = require('sequelize');
const db = require('../db.js');

const foodModel = db.define('food', {
  id: {
    primaryKey: true,
    type: sequelize.INTEGER,
    autoIncrement: true,
  },
  name: sequelize.STRING,
  items: sequelize.STRING,
});
module.exports = foodModel;
