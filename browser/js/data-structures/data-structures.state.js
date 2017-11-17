app.config(function ($stateProvider) {
    $stateProvider.state('course', {
        url: '/learn',
        controller: 'CourseController',
        templateUrl: 'js/data-structures/data-structures.template.html',
        resolve: {
        	redirect: function(HomeFactory) {
                HomeFactory.recordNewHit('learn');
        		window.location.href = "https://www.udemy.com/learning-algorithms-in-javascript-from-scratch/?couponCode=SITEDISCOUNT";
        	}
        }
    });
});