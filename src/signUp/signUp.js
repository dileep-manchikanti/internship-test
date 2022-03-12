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
        userService.user=user.user;
        user.submit=function(){
            console.log(user.user.photo);
            window.alert("your Credentials are saved sucessfully");
        }
    }
})();