(function(){
    'use strict';
    angular.module('user')
    .controller('signInController',signInController);
    signInController.$inject=['userService']
    function signInController(userService){
        var user=this;
        if(user.user!=undefined && user.user.email!=undefined && user.user.email.indexOf('@')==-1){
            user.invalidEmail=true;
        }
        user.logIn=function(){
            // console.log(user.user.email);
            // console.log(user.user.password);
            // console.log(userService.user.email);
            // console.log(userService.user.password);
            // console.log(user.user.email===userService.user.email && user.user.password===userService.user.password);
            if(user.user.email===userService.user.email && user.user.password===userService.user.password){
                userService.didSigned=true;
                window.alert("logged in sucessfully...");
            }
        }
    }
})();