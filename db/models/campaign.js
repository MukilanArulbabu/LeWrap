const sequelize = require('sequelize');
const db = require('../db.js');

const campaignModel = db.define('campaign', {
  id: {
    primaryKey: true,
    type: sequelize.INTEGER,
    autoIncrement: true,
  },
  phone: sequelize.STRING,
  code: sequelize.STRING,
  sent: sequelize.BOOLEAN,
});
module.exports = campaignModel;