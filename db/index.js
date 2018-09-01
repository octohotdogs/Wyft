const sequelize = require('sequelize');
const orm = new Sequelize('wyft', 'root', '', {
  host:'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  operatorsAliases: false
});

const Guest = orm.define('Guest',{
  GUEST_ID: {type: Sequelize.INTEGER, autoIncrement:true},
  FIRST_NAME: Sequelize.STRING,
  LAST_NAME: Sequelize.STRING,
  STREET_NUMBER: Sequelize.INTEGER,
  STREET_NAME: Sequelize.STRING,
  ZIP_CODE: Sequelize.INTEGER,
  USERNAME:Sequelize.STRING,
  PASSWORD: Sequelize.STRING,
  PRIMARY_PURPOSE: Sequelize.STRING
});


`GUEST_ID` INTEGER(30) NOT NULL AUTO_INCREMENT DEFAULT 1,
  `FIRST_NAME` CHAR(30) NOT NULL,
  `LAST_NAME` CHAR(40) NULL,
  `STREET_NUMBER` INTEGER(10) NOT NULL,
  `STREET_NAME` CHAR(100) NOT NULL,
  `ZIP_CODE` INTEGER(15) NOT NULL,
  `USERNAME` VARCHAR(30) NULL DEFAULT NULL,
  `PASSWORD` VARCHAR(30) NULL DEFAULT NULL,
  `PRIMARY_PURPOSE` CHAR(40) NULL DEFAULT 'NULL'