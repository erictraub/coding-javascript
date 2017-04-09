var mongoose = require('mongoose');
var CurrencyPrice = mongoose.model('CurrencyPrice');
var rp = require('request-promise');
var currenciesManager = {};
module.exports = currenciesManager;

currenciesManager.createAllCurrencyObjs = function() {
    var options = {
        uri: `https://poloniex.com/public?command=returnTicker`,
        json: true
    };

    return rp(options)
    .then(response => {
        var batchKey = Math.random().toString(36).substring(7);
        var currenciesArr = [];
        for (var key in response) {
            if (key.substring(0, 3) === 'BTC') {
                var currencyObj = {
                    ticker: key.substring(4),
                    lowestAsk: response[key].lowestAsk,
                    highestBid: response[key].highestBid,
                    percentChange: Number(response[key].percentChange),
                    quoteVolume: Number(response[key].quoteVolume),
                    baseVolume: Number(response[key].baseVolume),
                    batch: batchKey
                };
                currenciesArr.push(currencyObj);
            };
        };
        return currenciesArr
    })
    .then(currenciesArr => {
        var promises = [];
        currenciesArr.forEach(currencyObj => {
            promises.push(CurrencyPrice.create(currencyObj));
        });
        return Promise.all(promises);
    })
    .then(data => {
        console.log('DATA LENGTH: ', data.length);
    	return data;
    });
}