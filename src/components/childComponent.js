(function(){
    'use strict';
    angular.module('user')
    .component('childComponent',{
        templateUrl:'src/components/childComponent.html',
        bindings:{
            userName:'<'
        },
        controller:childComponentController
    });

    function childComponentController(){
        var $ctrl=this;
        // console.log($ctrl.name);
        // if($ctrl.name!=""){
        //     $ctrl.Name="Hi "+$ctrl.name;
        // }
        // else{
        //     $ctrl.Name="";
        // }
        console.log($ctrl.userName);
        $ctrl.Name="Hi "+$ctrl.userName;
    }
})();