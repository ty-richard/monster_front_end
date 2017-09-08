(function() {
    'use strict';
    angular.module('angular-monster', )
        .component('monsters', {
            controller: 'monstersController',
            templateUrl: 'app/monsters/monsters_template.html',
            bindings: {
                monstersbinding: '<'
            }

        })
}());