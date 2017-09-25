angular.module('liga')
    .factory('FormService', [formService])

    
    function formService(){
        var form = {};
        formService.comments = formCtrl.comments;
        form.getComments = function(){
        // return comments;
        }

        form.addComment = function(comment){
            form.getComments().add(comment);
        }
        
        return form;
    }
