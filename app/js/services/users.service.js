function UsersService ($http){

    var vm = this;
    $http.get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        vm.data = response.data;
        console.log('hi');  
        return vm.data;        
      });  
}


angular
    .module('liga')
    .service('UsersService', ['$http', UsersService]);

