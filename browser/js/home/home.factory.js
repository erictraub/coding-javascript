app.factory('HomeFactory', function ($http) {
    var HomeFactory = {};

    HomeFactory.createNewEmail = function(emailAddress) {
    	return $http.post('/api/main/email', { emailAddress: emailAddress })
    		.then(function(email) {
    			return email;
    		});
    };

    HomeFactory.recordNewHit = function() {
    	return $http.post('/api/hits/', { page: 'home' })
    		.then(function(hit) {
    			return hit;
    		});
    };

    return HomeFactory;
});