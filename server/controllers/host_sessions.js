const sectionsMockData = require('../../data/sections.json');

var post = (req, res, db, hostId) => {
	//console.log('body...',req.body);
	var hostingSessionData = req.body.data;
	//var hostId = req.body.hostId;

	// TODO add cb
	// db.insertIntoHost(hostData, (err, data) => {
	// 	var successMsg = {"message": "Thanks for hosting your wifi with us"}
	// 	res.json(successMsg);			
	// });
	db.insertIntoHostingSession(hostingSessionData, hostId, (data) => {
		res.json(data);		
	});		
}

var getAll = (req, res, db, hostId) => {
	if(hostId) {
		db.fetchSessionDetailsForHost(hostId, (data) => {
			res.json(data);
		});
	}
}

var search = (req, res, db) => {
	var data = req.body;
	var zipCode = data['zipCode'];
	db.fetchAvailableSessionDetails(zipCode, (data) => {
		res.json(data);
	});
}

var getHostAddresses = (req, res) => {
	// mock data
	res.json(sectionsMockData);
}

module.exports.post = post;
module.exports.search = search;
module.exports.getAll = getAll;
module.exports.getHostAddresses = getHostAddresses;