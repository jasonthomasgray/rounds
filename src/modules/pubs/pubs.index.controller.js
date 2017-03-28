(function() {
  'use strict';
  angular.module('rounds.modules')
    .controller('PubsIndexController', PubsIndexController)

  function PubsIndexController() {
    const vm = this

    vm.results = []
  }
}());
