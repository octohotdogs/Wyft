const Sequelize = require('sequelize');
require('dotenv').config();
const host_addressess_data = require('./../data/sections.json');

const orm = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
// const orm = new Sequelize('wyft', 'wyft', 'mysql', {
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
  ADDRESS: Sequelize.STRING,
  USERNAME:Sequelize.STRING,
  PASSWORD: Sequelize.STRING,
  LAT: Sequelize.FLOAT,
  LNG: Sequelize.FLOAT,
  OPTIONAL_DETAILS: Sequelize.STRING
});

const Hosting_Session = orm.define('Hosting_Session',{

  DATE: Sequelize.STRING,
  START_TIME: Sequelize.STRING,
  END_TIME: Sequelize.STRING,
})

orm.query("set FOREIGN_KEY_CHECKS=1");

Hosting_Session.belongsTo(Host,{as:'theHost',foreignKey:'host_id'});
Host.hasMany(Hosting_Session,{foreignKey:'host_id'});

Guest.sync();
Host.sync();
Hosting_Session.sync();


const importHost = function(host_data) {
	Host.create({
		FIRST_NAME: host_data['first_name'],
		LAST_NAME: host_data['last_name'],
		ADDRESS: host_data['address'],
		LAT: host_data['lat'],
		LNG: host_data['lng'],
	}).then((host) => {
		const host_id = host.id;
		console.log(host_id);
		for(var i = 0; i < host_data.sections.length; i++) {
			var session_data = host_data.sections[i];
			Hosting_Session.create({
				DATE: session_data['date'],
				START_TIME: session_data['start_time'],
				END_TIME: session_data['end_time'],
				host_id: host_id
			})
		}		
	})
}

for(var i = 0; i < host_addressess_data.length; i++) {
	var host_data = host_addressess_data[i];
	// TODO make this one a promise so that we will exit the db after we import all the data
	importHost(host_data);
}



