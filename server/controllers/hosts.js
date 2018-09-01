var get = (req, res, data, id) => {
	if(id) {
		// TODO
		// find the host from db
		res.json({id: id});		
	} else {
		res.json(data)
	}
}

var post = (req, res) => {
	console.log('body...',req.body);
	var successMsg = {"message": "Thanks for hosting your wifi with us"}
	res.json(successMsg);			
}

var put = (req, res) => {
	var hostId = req.params['hostId'];
	var host = req.body;
	//TODO 
	// save the new host info to db
	res.json({id: hostId});
}

var destroy = (req, res) => {
	//TODO 1. get the host info from db, delete it
	res.json({id: req.params['hostId']});
}


module.exports.get = get;
module.exports.put = put;
module.exports.post = post;
module.exports.delete = destroy;