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
