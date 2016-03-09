// require modules
var app    = require('./app'),
    config = require('./config');

// run server
app.listen(config.port, function() {
    console.log('Express server listening on port ' + config.port);
});