var mainManager = {};
module.exports = mainManager;
var currenciesManager = require('./app/routes/currencies/currenciesManager');

mainManager.startInterval = function() {
	setInterval(() => {
		// currenciesManager.createAllCurrencyObjs();
		var d = new Date;
		console.log('CREATING: ', d.getHours());
	}, 3600000);
};