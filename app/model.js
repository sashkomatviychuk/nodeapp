// require modules
var mongoose = require('mongoose'),
    config = require('../config');

// connect to db
mongoose.connect(config.mongo.connection);

// create schema
var schema = mongoose.Schema({
	title: {type: String, max: 1},
	value: {type: Number, min: 1, max: 4096},
	created_at: {type: Date, default: Date.now}
});

var List = mongoose.model('List', schema);

// export ListModel
module.exports = List;