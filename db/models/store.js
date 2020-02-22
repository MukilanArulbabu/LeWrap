const sequelize = require('sequelize');
const db = require('../db.js');

const storeModel = db.define('store', {
  id: {
    primaryKey: true,
    type: sequelize.INTEGER,
    autoIncrement: true,
  },
  name: sequelize.STRING,
  address: sequelize.STRING,
  lat: sequelize.STRING,
  lon: sequelize.STRING,
});
module.exports = storeModel;
