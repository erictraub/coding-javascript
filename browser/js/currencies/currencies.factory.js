app.factory('CurrenciesFactory', function ($http) {
    var CurrenciesFactory = {};

    CurrenciesFactory.fetchAllCurrencyPriceObjs = function() {
        return $http.get('/api/currencies')
        .then(response => {
            return response.data;
        });
    };

    CurrenciesFactory.formatAsBatch = function(arr) {
    	var batchObj = {};
    	arr.forEach(elem => {
    		if (!batchObj[elem.batch]) batchObj[elem.batch] = { currencies: [] };
            elem.percentChange = Math.round(elem.percentChange * 1000) / 10;
    		batchObj[elem.batch].currencies.push(elem);
    	});
    	var batchArr = [];
    	for (var key in batchObj) {
            batchObj[key].currencies.sort((a, b) => { return b.percentChange - a.percentChange});
    		batchArr.push(batchObj[key]);
    	};
        batchArr.forEach(batch => {
            var totalPercentage = 0;
            var totalCurrencies = 0;
            batch.currencies.forEach(currency => {
                totalCurrencies++;
                totalPercentage += Number(currency.percentChange);
            });
            batch.averagePercentChange = Math.round((totalPercentage / totalCurrencies) * 100) / 100;
        });
        return batchArr;
    };

    return CurrenciesFactory;
});