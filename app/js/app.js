var liga = angular.module('liga', ['ui.router']);

liga.config(['$stateProvider', function($stateProvider){
    $stateProvider
    .state('home', {
        url: '',
        templateUrl:'views/home.html'
    })
    .state('all_penguins', {
        url: '/all_ping',
        templateUrl:'views/all_ping.html',
        controller:'usersCtrl'
    })
    .state('penguin_day', {
        url: '/today_ping',
        templateUrl:'views/today_ping.html'
    })
    .state('form', {
        url: '/form',
        templateUrl:'views/form.html',
        controller:'formCtrl'
    })
}])