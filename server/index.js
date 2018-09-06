const express = require('express');
var bodyParser = require('body-parser');
const data = require('./../data/host_addresses.json');
const db = require('../db/index.js');
//const guest = require('./../data/guest.json');
//const host = require('./../data/host.json');

const app = express();
const hosts = require('./controllers/hosts.js');
const hostSessions = require('./controllers/host_sessions.js');

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

// app.route('/api/hosts/:hostId')
// 	.get( (req, res) => {
// 		var hostId = req.params['hostId'];
// 		hosts.get(req, res, data, hostId);
// 	})
// 	.put( hosts.put )
// 	.delete( hosts.delete )

// create new session for a host
app.post('/api/hosts/:hostId/sessions', (req, res) => {
	var hostId = req.params.hostId;
	hostSessions.post(req, res, db, hostId);
});

// host session crud
// app.route('/api/host_sessions')
// 	.get((req, res) => {		
// 		hostSessions.get(req, res, db, null)
// 	})
	// .post((req, res) => {
	// 	hostSessions.post(req, res, db)
	// });

// app.route('/api/host_sessions/:hostId')
// 	.get( (req, res) => {
// 		var hostId = req.params['hostId'];
// 		hostSessions.get(req, res, data, hostId);
// 	})
// 	.put( hostSessions.put )
// 	.delete( hostSessions.delete )

app.listen(3000, () => console.log('Example app listening on port 3000!'))