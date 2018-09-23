const Sequelize = require('sequelize');
const _ = require('underscore');
require('dotenv').config();

//const orm = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
 const orm = new Sequelize('wyft', 'decidogs', 'decidogs1', {
  host:'wyft.c7apdxfepyxe.us-west-1.rds.amazonaws.com',
  dialect: 'mysql',
  port: 3306,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  operatorsAliases: false
});

 orm
 .authenticate()
 .then(() => {
   console.log("Connection has been established successfully.");
 })
 .catch(err => {
   console.error("Unable to connect to the database:", err);
 });