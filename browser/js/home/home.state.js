app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        controller: 'HomeController',
        templateUrl: 'js/home/home.template.html'
    });
});