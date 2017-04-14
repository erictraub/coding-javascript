'use strict';
var chalk = require('chalk');
var schedule = require('node-schedule');
var currenciesManager;
var mainManager;

// Requires in ./db/index.js -- which returns a promise that represents
// mongoose establishing a connection to a MongoDB database.
var startDb = require('./db');
// Create a node server instance! cOoL!
var server = require('http').createServer();

var createApplication = function () {
    var app = require('./app');
    server.on('request', app); // Attach the Express application.
    require('./io')(server);   // Attach socket.io.
};

var startServer = function () {
    var PORT = process.env.PORT || 1337;
    server.listen(PORT, function () {
        console.log(chalk.blue('Server started on port', chalk.magenta(PORT)));
    });
};


startDb.then(createApplication).then(() => {
		startServer();
		mainManager = require('./mainManager');
		currenciesManager = require('./app/routes/currencies/currenciesManager');
		var rule = new schedule.RecurrenceRule();
		rule.dayOfWeek = [0,1,2,3,4,5,6];
		rule.hour = 20;
		rule.minute = 0;
		schedule.scheduleJob(rule, currenciesManager.createAllCurrencyObjs);
		// mainManager.startInterval();
	})
	.catch(function (err) {
	    console.error(chalk.red(err.stack));
	    process.kill(1);
});
