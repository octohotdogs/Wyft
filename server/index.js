const express = require('express');
var bodyParser = require('body-parser');
const app = express();


app.use(express.static(__dirname + '/../client/dist'));
//app.get('/', (req, res) => res.send('Hello world FFF'));



app.listen(3000, () => console.log('Example app listening on port 3000!'))