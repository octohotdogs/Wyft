const express = require('express');
var bodyParser = require('body-parser');
const data = require('./../data/host_addresses.json');
const app = express();

// recommendation, explanation is fuzzy, ask NFD >

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));
//app.get('/', (req, res) => res.send('Hello world FFF'));

app.get('/api/hosts', (req, res) => {
	res.json(data);
});


app.post('/api/hosts', (req, res) => {
	console.log('body...',req.body);
	//throw new Error("BROKEN");
	var successMsg = {"message": "Thanks for hosting your wifi with us"}
	res.json(successMsg);
});

app.post('/api/guests/search', (req, res) => {
	console.log('body...', req.body);
	res.json(data.slice(0, 6));
});



app.listen(3000, () => console.log('Example app listening on port 3000!'))