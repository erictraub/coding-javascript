app.config(function ($stateProvider) {
    $stateProvider.state('join', {
        url: '/join',
        controller: 'JoinController',
        templateUrl: 'js/join/join.template.html',
        resolve: {
        	redirect: function() {
        		window.location.href = "http://nooma.tv/n/erictraub";
        	}
        }
    });
});