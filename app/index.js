// require modules
var express = require('express'),
    http = require('http'),
    app = express(),
    ejs = require('ejs-locals'),
    path = require('path'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    moment = require('moment'),
    config = require('../config'),
    routes = require('./routes');

// configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.locals.moment = moment

// views config
app.engine('html', ejs);
app.engine('ejs', ejs);
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use("/public", express.static(path.join(__dirname, '../public')));
app.use('/', routes);

app.use(function(req, res, next){
    res.status(404);
    res.render('404');
});

// export application
module.exports = app;