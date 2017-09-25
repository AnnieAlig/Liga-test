angular.module('liga')
.controller ('formCtrl', ['FormService', formCtrl]);

function formCtrl(FormService){
    var vm = this;
    
    vm.comments = [
        {
            name: "Annie",
            favourite: "Great penguins",
            comment: "I love penguins"
        },
        {
            name: "Pavlo",
            favourite: "Little penguins",
            comment: "Penguins are cute"
        }
    ];

vm.data = {};
vm.data.name = "";
vm.data.favourite = "";
vm.data.comment = "";

vm.add = function(newComment) {
    this.newComment = {
        name: vm.data.name,
        favourite: vm.data.favourite,
        comment: vm.data.comment
    };
       
    var newComment =  this.newComment;
    console.log(newComment);
    return newComment;
    
}
    
}