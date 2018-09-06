const express = require('express');
var bodyParser = require('body-parser');
const data = require('./../data/host_addresses.json');
const db = require('../db/index.js');
//const guest = require('./../data/guest.json');
//const host = require('./../data/host.json');

const app = express();
const hosts = require('./controllers/hosts.js');

// recommendation, explanation is fuzzy, ask NFD >

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));
//app.get('/', (req, res) => res.send('Hello world FFF'));

// app.get('/api/hosts', (req, res) => {
// 	res.json(data);
// });

// app.post('/api/hosts', (req, res) => {
// 	console.log('body...',req.body);
// 	//throw new Error("BROKEN");
// 	var successMsg = {"message": "Thanks for hosting your wifi with us"}
// 	res.json(successMsg);
// });

// guest searching endpoint
app.post('/api/guests/search', (req, res) => {
	console.log('body...', req.body);
	res.json(data.slice(0, 6));
});

//testing insert into guest
// var guestData = {};
// guestData.firstName = 'freemanFans';
// guestData.lastName = 'forever';
// guestData.streetNum = 680;
// guestData.streetName = 'street name';
// guestData.zip = 30080;
// guestData.userName = 'fff';
// guestData.password = 'abcd';
// guestData.optional = 'netflix';

// var sessionDummy ={};
// sessionDummy.date = "01-JAN-2019";
// sessionDummy.start = "11:00 AM";
// sessionDummy.end = "1:00 PM";

//db.insertIntoHost(guestData);
//db.insertIntoHostingSession(sessionDummy,1);


// host crud
app.route('/api/hosts')
	.get((req, res) => {		
		hosts.get(req, res, db, null)
	})
	.post((req, res) => {
		hosts.post(req, res, db)
	});

app.route('/api/hosts/:hostId')
	.get( (req, res) => {
		var hostId = req.params['hostId'];
		hosts.get(req, res, data, hostId);
	})
	.put( hosts.put )
	.delete( hosts.delete )

app.listen(3000, () => console.log('Example app listening on port 3000!'))