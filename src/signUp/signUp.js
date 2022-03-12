(function(){
    'use strict';
    angular.module('user')
    .service('userService',userService)
    .controller('signUpController',signUpController);

    function userService(){
        var service=this;
    }
    signUpController.$inject=['userService'];
    function signUpController(userService){
        var user=this;
        var service=userService;
        user.submit=function(){
            service.user=user.user;
            console.log(service);
            console.log(user.user.photo);
            console.log(user.user.email);
            window.alert("your Credentials are saved sucessfully");
        }
    }
})();