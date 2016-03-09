var express = require('express'),
    ListModel = require('./model'),
    config = require('../config'),
    faker = require('./faker'),
    router = express.Router();


// home page. Show last added records
router.get('/', function (req, res, next) {
	// get last records
	var query = ListModel
				.find({})
				.sort({'created_at': -1})
				.limit(config.limit);

	query.exec(function (err, result) {
		res.render('index', {
			list: result
		});
	});
});

// remove records

router.get('/remove', function (req, res, next) {
	ListModel.remove(function (err, removed) {});

	return res.redirect('/');
});

// generate records list
router.get('/generate', function (req, res, next) {
	// generate records
	var data, model;
	// list of objects for insert
	var list = [];

	// generate records
	for (var i = 0; i < config.insertRowsCount; ++i) {
		// get fake object
		data = faker.getObject();
		list.push(data);
	}

	// save
	ListModel.collection.insert(list);

	return res.redirect('/');
});

// get most repeated titles
router.get('/repeated', function (req, res, next) {
	// get total value and count of groupped records
	var query = ListModel.aggregate([
		{
			$group: {
	            _id: "$title",
	            total: { $sum: "$value" },
	            count: { $sum: 1 }
	        }
		},
		{
			$sort: {
				count: -1
			}
		},
		{
			$limit: config.limit
		}
	], function (err, result) {
		res.render('repeated', {
			list: result,
			params: req.query
		});
	});
});

// export routes
module.exports = router;