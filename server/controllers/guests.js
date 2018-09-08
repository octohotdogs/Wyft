var post = (req, res, db) => {
	//console.log('body...',req.body);
	var guestData = req.body;
	db.insertIntoGuest(guestData, (data) => {
		res.json(data);	
	});
			
}

module.exports.post = post;