const epilogue = require('finale-rest');
const database = require('./db');
const foodModel = require('./models/food');
const storeModel = require('./models/store');

module.exports.initialize = async (app) => {
  // Initialize epilogue
  epilogue.initialize({
    app,
    sequelize: database,
    base: '/api',
  });

  // Create REST resource
  epilogue.resource({
    model: foodModel,
    endpoints: ['/food', '/food/:id'],
  });


  epilogue.resource({
    model: storeModel,
    endpoints: ['/store', '/store/:id'],
  });
  
  await database.sync();
};
