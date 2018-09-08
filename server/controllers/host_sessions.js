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
		})
	}
}

var search = (req, res, db) => {
	var data = req.body;
	var zipCode = data['zipCode'];
	db.fetchAvailableSessionDetails(zipCode, (data) => {
		res.json(data);
	})
	//console.log(db.fetchAvailableSessionDetails(zipCode));
	// return new Promise(function(resolve, reject){
	// 	resolve(db.fetchAvailableSessionDetails(zipCode));
	// }).then((data) => {
	// 	console.log('from host sessions controller 3',data);
	// 	res.json(data);					
	// })
	// return db.fetchAvailableSessionDetails(zipCode).then((data) => {
	// 	console.log('from host sessions controller 2',data);
	// 	res.json(data);			
	// })	
}


module.exports.post = post;
module.exports.search = search;
module.exports.getAll = getAll;