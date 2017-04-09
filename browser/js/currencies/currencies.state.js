app.config(function ($stateProvider) {
    $stateProvider.state('currencies', {
        url: '/currencies',
        controller: 'CurrenciesController',
        templateUrl: 'js/currencies/currencies.template.html',
        resolve: {
        	allBatches: function(CurrenciesFactory) {
        		return CurrenciesFactory.fetchAllCurrencyPriceObjs()
                .then(response => {
                    return CurrenciesFactory.formatAsBatch(response);
                });
        	}
        }
    });
});