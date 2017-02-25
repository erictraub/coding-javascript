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
});


app.factory('AdjustFactory', function ($http) {
    var AdjustFactory = {};

    AdjustFactory.fetchAllEamils = function() {
    	return $http.get('/api/main/email')
    		.then(function(response) {
    			return response.data;
    		});
    };

    return AdjustFactory;
});