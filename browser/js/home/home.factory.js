app.factory('HomeFactory', function ($http) {
    var HomeFactory = {};

    HomeFactory.createNewEmail = function(emailAddress) {
    	return $http.post('/api/main/email', { emailAddress: emailAddress })
    		.then(function(email) {
    			return email;
    		});
    };

    HomeFactory.recordNewHit = function(pageName) {
    	return $http.post('/api/hits/', { page: pageName })
    		.then(function(hit) {
    			return hit;
    		});
    };

    return HomeFactory;
});