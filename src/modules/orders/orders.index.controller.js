(function() {
  'use strict';
  angular.module('rounds.modules')
    .controller('OrdersIndexController', OrdersIndexController)

  function OrdersIndexController() {
    const vm = this

    vm.results = []
  }
}());
