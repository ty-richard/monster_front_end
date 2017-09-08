(function() {
    'use strict';
    angular.module('angular-monster', )
        .component('formmonster', {
            controller: 'formController',
            templateUrl: 'app/form/form_template.html',
            bindings: {
                formbinding: '<'
            }

        })
}());