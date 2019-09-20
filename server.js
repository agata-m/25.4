var express = require('express');
var app = express();

app.use(express.static('assets'));

app.get('/', function(req, res) {
	res.sendFile('/index.html');
});

app.get('/userform', function (req, res) {
	const response = {
		first_name: req.query.first_name,
		last_name: req.query.last_name
	};
	res.send(JSON.stringify(response));
});

app.use('/store', function(req, res, next) {
	console.log('Hey, I\'m a middleware to the store main page');
	next();
});

app.get('/store', function(req, res) {
	res.send('This is the store main page');
});

var server = app.listen(3000, 'localhost', function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listens to http://' + host + ':' + port);
});