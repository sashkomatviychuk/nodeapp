var express = require('express');
    router = express.Router();


router.get('/', function () {}, function (req, res, next) {
	return res.render('index');
});

module.exports = router;