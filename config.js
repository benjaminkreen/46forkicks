var express = require('express');


exports.init = function(app){
	app.use(express.logger());
	
	app.use('/scripts', express.static('./assets/javascripts'));
	app.use('/stylesheets', express.static('./assets/stylesheets'));
	app.use('/images', express.static('./assets/images'));
	
}