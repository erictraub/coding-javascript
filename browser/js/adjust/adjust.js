app.config(function ($stateProvider) {
    $stateProvider.state('adjust', {
        url: '/adjust',
        controller: 'AdjustController',
        templateUrl: 'js/adjust/adjust.template.html'
    });
});

app.controller('AdjustController', function($scope, AdjustFactory) {
	var clear = window.location.href.indexOf("clear=3goodcall3!") > -1 ? true : false;

	if (clear) AdjustFactory.fetchAllEamils()
		.then(emails => {
			var emailArr = [];
			emails.forEach(email => {
				emailArr.push(email.emailAddress);
			});
			$scope.allEmails = emailArr;
		});

    AdjustFactory.getCurrencyPercnetChange();

});


app.factory('AdjustFactory', function ($http) {
    var AdjustFactory = {};

    AdjustFactory.fetchAllEamils = function() {
    	return $http.get('/api/main/email')
		.then(function(response) {
			return response.data;
		});
    };

    AdjustFactory.getCurrencyPercnetChange = function() {
        return $http.get('https://poloniex.com/public?command=returnTicker')
        .then(response => {
            response = response.data;
            var totalPercentage = 0;
            var totalCurrencies = 0;
            for (var key in response) {
                if (key.substring(0, 3) === 'BTC') {
                    totalPercentage += Number(response[key].percentChange);
                    totalCurrencies++;
                }   
            };
            var averagePercentChange = totalPercentage / totalCurrencies;
            console.log('TOTAL PERCENTAGE: ', totalPercentage);
            console.log('TOTAL CURRENCIES: ', totalCurrencies);
            console.log('AVG PERCENT CHANGE: ', averagePercentChange);
        });
    }

    return AdjustFactory;
});








