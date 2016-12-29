app.factory('HomeFactory', function ($http) {
    var HomeFactory = {};

    HomeFactory.createNewEmail = function(emailAddress) {
    	return $http.post('/api/main/email', { emailAddress: emailAddress })
    		.then(function(email) {
    			return email;
    		});
    };

    return HomeFactory;
});