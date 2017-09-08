(function() {
    'use strict';
    angular.module('angular-monster', )
        .controller('monstersController', monstersController)

    function monstersController($http) {
        const vm = this;
        vm.$onInit = function() {
            console.log(vm)
        }
    }
}());