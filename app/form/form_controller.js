(function() {
    'use strict';
    angular.module('angular-monster', )
        .controller('formController', formController)

    function formController($http) {
        const vm = this;
        vm.$onInit = function() {

        }

        vm.addMonster = function(name, desc, imageUrl, eyes, monsters) {
            var body = {
                name: "name",
                description: "sc",
                image: "imageUrl",
                eyes: 2,
                scary: true
            }

            const url = "https://obscure-stream-29203.herokuapp.com/api"
            $http.post(url + "/v1/monsters", JSON.stringify(body)).then(function(res) {

                console.log(res)
            })
        }
    }
}())
// "id": 2,
// "name": "James P. Sullivan",
// "description": "Tall and blue with purple spots",
// "image": "http://vignette1.wikia.nocookie.net/disney/images/f/ff/James-p-sulley-sullivan.png/revision/latest?cb=20131027234614",
// "eyes": 2,
// "scary": true