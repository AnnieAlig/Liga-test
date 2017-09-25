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
    // this.data.push(this.newComment);
    
    var newComment =  this.newComment;
    console.log(newComment);
    return newComment;
    
}
// console.log(newComment);
// return comments;
// vm.newComment = '';
// vm.addComment = function(name, favourite, comment) {
//     this.form.push(this.newComment);
//     this.newComment = {
//         name:'name',
//         favourite: 'favourite',
//         comment: 'comment'
//     };
//     // this.newComment = vm.newComment;
//     // return this.newComment;
// };
    // console.log(vm.newComment);
    // console.log($form.comment);

    // vm.addComment = function(){
    //     var comment = {
    //         name:'name',
    //         favourite: 'favourite',
    //         comment: 'vm.newComment'
    //     }
    //     FormService.addComment(comment);
    // }
    
}