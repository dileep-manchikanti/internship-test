(function(){
    'use strict';
    angular.module('user')
    .service('userService',userService)
    .controller('signInController',signInController);
    function userService(){
        var service=this;
    }
    signInController.$inject=['userService'];
    function signInController(userService){
        var user=this;
        var service=userService;
        console.log(service);
        if(user.user!=undefined && user.user.email!=undefined && user.user.email.indexOf('@')==-1){
            user.invalidEmail=true;
        }
        user.logIn=function(){
            if(user.user.email===service.user.email && user.user.password===service.user.password){
                service.user.didSigned=true;
                window.alert("logged in sucessfully...");
            }
            else{
                window.alert('username or password in wrong.Please try Again!!')
            }
        }
    }
})();