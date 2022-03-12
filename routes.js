(function(){
    'use strict';
    angular.module('user')
    .config(routesConfig);

    routesConfig.$inject=['$stateProvider','$urlRouterProvider'];
    function routesConfig($stateProvider,$urlRouterProvider){
        // $urlRouterProvider.otherwise('/signUp');
        $stateProvider
        .state('signUp',{
            url:"/signUp",
            templateUrl:"src/signUp/signUp.html",
            controller:'signUpController',
            controllerAs:'signUpCtrl'
        })
        .state('signIn',{
            url:"/signIn",
            templateUrl:"src/signIn/signIn.html",
            controller:'signInController',
            controllerAs:'signInCtrl'
        })
        .state('profile',{
            url:'/profile',
            templateUrl:'src/profilePage/profilePage.html',
            controller:'profileController',
            controllerAs:'profileCtrl'
        })
        .state('components',{
            url:'/components',
            templateUrl:'src/components/componentsPage.html'
        })
    }
})();