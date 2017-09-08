(function() {
    'use strict';
    angular.module('angular-monster', )
        .controller('monsterController', monsterController)

    function monsterController($http) {
        const vm = this;
        vm.$onInit = function() {
            const url = "https://obscure-stream-29203.herokuapp.com/api"
            $http.get(url + "/v1/monsters").then(function(monsters) {
                vm.monsters = monsters.data.monsters
                console.log(monsters.data.monsters)
            })
        }
    }
}());