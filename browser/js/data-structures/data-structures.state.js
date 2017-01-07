app.config(function ($stateProvider) {
    $stateProvider.state('course', {
        url: '/course',
        controller: 'CourseController',
        templateUrl: 'js/data-structures/data-structures.template.html',
        resolve: {
        	redirect: function() {
        		window.location.href = "https://www.udemy.com/learning-data-structures-in-javascript-from-scratch/?couponCode=GOOGLEDISCOUNT1";
        	}
        }
    });
});