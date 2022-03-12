(function(){
    'use strict';
    angular.module('user')
    .service('userService')
    .controller('signInController',signInController);
    signInController.$inject=['userService'];
    function signInController(userService){
        var user=this;
        var service=userService;
        console.log(service);
        if(user.user!=undefined && user.user.email!=undefined && user.user.email.indexOf('@')==-1){
            user.invalidEmail=true;
        }
        user.logIn=function(){
            console.log(user.user.email);
            console.log(user.user.password);
            console.log(service.user.email);
            console.log(service.user.password);
            console.log(user.user.email===service.user.email && user.user.password===service.user.password);
            if(user.user.email===service.user.email && user.user.password===service.user.password){
                service.didSigned=true;
                window.alert("logged in sucessfully...");
            }
        }
    }
})();