// require modules
var express = require('express'),
    http = require('http'),
    app = express(),
    ejs = require('ejs-locals'),
    path = require('path'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    config = require('../config'),
    routes = require('./routes'),
    ListModel = require('./model');

// configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// views config
app.engine('html', ejs);
app.engine('ejs', ejs);
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use("/public", express.static(path.join(__dirname, '../public')));
app.use('/', routes);

// export application
module.exports = app;