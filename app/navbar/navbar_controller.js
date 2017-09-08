(function() {
    'use strict';
    angular.module('angular-monster', )
        .controller('navbarController', navbarController)

    function navbarController($http) {
        const vm = this;
        vm.$onInit = function() {
            console.log("navbar")
        }
    }
}());