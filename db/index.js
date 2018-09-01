const Sequelize = require('sequelize');
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

orm.query("set FOREIGN_KEY_CHECKS=0");

const Guest = orm.define('Guest',{
  FIRST_NAME: Sequelize.STRING,
  LAST_NAME: Sequelize.STRING,
  STREET_NUMBER: Sequelize.INTEGER,
  STREET_NAME: Sequelize.STRING,
  ZIP_CODE: Sequelize.INTEGER,
  USERNAME:Sequelize.STRING,
  PASSWORD: Sequelize.STRING,
  PRIMARY_PURPOSE: Sequelize.STRING
});

const Host = orm.define('Host', {
  FIRST_NAME: Sequelize.STRING,
  LAST_NAME: Sequelize.STRING,
  STREET_NUMBER: Sequelize.INTEGER,
  STREET_NAME: Sequelize.STRING,
  ZIP_CODE: Sequelize.INTEGER,
  USERNAME:Sequelize.STRING,
  PASSWORD: Sequelize.STRING,
  OPTIONAL_DETAILS: Sequelize.STRING
});

const Hosting_Session = orm.define('Hosting_Session',{
  DATE: Sequelize.STRING,
  START_TIME: Sequelize.STRING,
  END_TIME: Sequelize.STRING,
})

orm.query("set FOREIGN_KEY_CHECKS=1");

Hosting_Session.hasMany(Host);
Host.belongsTo(Hosting_Session);
Guest.sync();
Host.sync();
Hosting_Session.sync();

const insertIntoGuest = function(guestData) {
  const FIRST_NAME = guestData.firstName;
  const LAST_NAME = guestData.lastName;
  const STREET_NUMBER = guestData.streetNum;
  const STREET_NAME = guestData.streetName;
  const ZIP_CODE = guestData.zip;
  const USERNAME = guestData.userName;
  const PASSWORD= guestData.password;
  const PRIMARY_PURPOSE = guestData.purpose;
  return Guest.sync().then(function(){
    Guest.create({FIRST_NAME : FIRST_NAME, LAST_NAME: LAST_NAME, STREET_NUMBER:STREET_NUMBER,STREET_NAME:STREET_NAME,ZIP_CODE:ZIP_CODE,USERNAME:USERNAME,PASSWORD:PASSWORD,PRIMARY_PURPOSE:PRIMARY_PURPOSE});
  }).then(function(result){
    console.log("FROM DB : INSERTED GUEST DATA TO GUEST TABLE");
  });
}


module.exports.Guest = Guest;
module.exports.Host = Host;
module.exports.Hosting_Session = Hosting_Session;
module.exports.insertIntoGuest = insertIntoGuest;


