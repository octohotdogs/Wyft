var post = (req, res, db, hostId) => {
	//console.log('body...',req.body);
	var hostingSessionData = req.body;
	//var hostId = req.body.hostId;

	// TODO add cb
	// db.insertIntoHost(hostData, (err, data) => {
	// 	var successMsg = {"message": "Thanks for hosting your wifi with us"}
	// 	res.json(successMsg);			
	// });
	db.insertIntoHostingSession(hostingSessionData, hostId);	
	res.json('success');		
}

var search = (req, res, db) => {
	var data = req.body;
	var zipCode = data['zipCode'];
	db.fetchAvailableSessionDetails(zipCode)
	res.json('success');
}

module.exports.post = post;