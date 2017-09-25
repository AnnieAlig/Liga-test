angular.
module('liga').
component('emails', {
    template:
      '<ul>' +
        '<li ng-repeat="user in $ctrl.data">' +
          '<span>{{user.email}}</span>' +
        '</li>' +
      '</ul>',
    controller: function emailsCtrl($http) {
      var vm = this;
      $http.get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
          vm.data = response.data;
          return vm.data;          
        });  
    }
});