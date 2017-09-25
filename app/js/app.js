var liga = angular.module('liga', ['ui.router', 'ngRoute']);

// liga.config(function($routeProvider){
//     $routeProvider.when('/',
//     {
//         template:'<h1> Welcome home </h1>'
//     });
//     $routeProvider.when('/all_ping',
//     {
//         templateUrl:'views/all_ping.html',
//         controller:'usersCtrl'
//     });
//     $routeProvider.when('/today_ping',
//     {
//         templateUrl:'views/today_ping.html'
//     });
//     $routeProvider.when('/form',
//     {
//         templateUrl:'views/form.html',
//         controller:'formCtrl'
//     });
// });


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
// liga.config(function($stateProvider){
//     $stateProvider
//     .state('layout', {
//         url: "",
//         //templateUrl: 'partials/layout.html',
//         templateUrl: 'tpl.layout.html',
//         controller:'LayoutController',
//         abstract:true, 
//         resolve : {
//             result_data: function ($q, $timeout)//,CommonService)
//             {
//                  //return resolve_homepage($q,CommonService)
//                  var deferred = $q.defer();
//                  $timeout(function(){
//                     deferred.resolve("from a parent");
//                  }, 500);
//                 return deferred.promise;
//             } 
//         }
//     })
//     .state('homepage', {
//         url: "/homepage",
//         //templateUrl: 'partials/homepage.html',
//         templateUrl: 'tpl.home.html',
//         parent: 'layout',
//         controller:'HomepageController',
//         resolve : {
//             result_data_child: function ($q, $timeout)//,CommonService)
//             {
//                  //return resolve_homepage($q,CommonService)
//                  var deferred = $q.defer();
//                  $timeout(function(){
//                     deferred.resolve("from a child");
//                  }, 500);
//                 return deferred.promise;
//             }
//         } 
//     })
//   })
 
