// configs
var conf = {
	totalLetters: 52,
	maxNumber: 4096
};

var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
conf.totalLetters = alphabet.length;

// get random char
var getChar = function () {
	var pos = Math.floor(Math.random() * conf.totalLetters);

	return alphabet.charAt(pos);
}

// get random number from 1 to 4096
var getNumber = function () {
	var n = 1 + (Math.random() * conf.maxNumber).toFixed(3);
	n = parseFloat(n);

	return n;
}

module.exports.getObject = function () {
	var obj = {};

	obj.title = getChar();
	obj.value = getNumber();

	return obj;
}