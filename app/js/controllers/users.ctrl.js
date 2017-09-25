angular.module('liga')
.controller ('usersCtrl', ['$http', usersCtrl]);

function usersCtrl($http){
    var vm = this;
    vm.users = "penguins";
    // vm.data = [];
    $http.get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
            vm.data = response.data;
            console.log(vm.data);
            return vm.data;
            
        });
   
}

// liga
//     // .service('UsersService')
//     .controller('UsersCtrl', ['UsersService','$http', UsersCtrl]);


// function UsersCtrl(UsersService, $http){
//     var vm = this;
//     var users = "pinguins";
    // console.log('users');

// function getUsers($this, $http){
//     $http({method: 'GET', url: 'https://jsonplaceholder.typicode.com/users'}).
//     then (function success(response){
//         $this.users=response;
        
//     });
//     console.log(response);
// }
// }

//     var promiseObj=UsersService.getData();
//     promiseObj.then(function(value) { $scope.all_ping=value; });

// }

