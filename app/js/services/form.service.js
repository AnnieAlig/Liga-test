angular.module('liga')
    .factory('FormService', [formService])

    
    function formService(){
        var form = {};
        formService.comments = formCtrl.comments;
        form.getComments = function(){
            console.log(formService.comments);
            // return comments;
        }

        form.addComment = function(comment){
            form.getComments().add(comment);
        }
        
        return form;
    }
    // console.log('scope is', formCtrl.comments);