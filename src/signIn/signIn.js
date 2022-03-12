(function(){
    'use strict';
    angular.module('user')
    .controller('signInController',signInController);
    signInController.$inject=['userService']
    function signInController(userService){
        var user=this;
        user.logIn=function(){
            if(user.user.email===userService.user.email && user.user.password===userService.user.password){
                userService.didSigned=true;
                window.alert("logged in sucessfully...");
            }
        }
    }
})();