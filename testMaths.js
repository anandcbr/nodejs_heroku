var mymath = require('./maths');

mymath.add(5,6);
mymath.prod(6,6);

var exp = require('express');

var app = exp();

app.get('/', function(req,res){
	res.send("Hello nodeJS webserver");
});

var port = process.env.PORT || 3000; // PORT for heroku

app.listen(port,function(){

	console.log("Running on configurable port from package.json " + port);
});