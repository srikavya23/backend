const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.database, process.env.username, process.env.password, {
  host: process.env.host,
  dialect: process.env.dialect,
  operatorsAliases: false,
 
  pool: {
    max: process.env.max,
    min: process.env.pool.min,
    acquire: process.env.pool.acquire,
    idle: process.env.pool.idle
  }
});
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
db.Customer = require('../models/customer.model.js')(sequelize, Sequelize);
 
module.exports = db;
