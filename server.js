var express = require('express');
var app = express();
require('./config').init(app);

app.get('/', function(req, res){
	res.render('hello.ejs');
});

app.listen(8181);
console.log("listening on 8181");