(function(){
    'use strict';
    angular.module('user')
    .controller('profileController',profileController);

    profileController.$inject=['userService'];

    function profileController(userService){
        var profile=this;
        var service=userService;
        profile.user=service.user;
        console.log(profile.user);
    }
})();