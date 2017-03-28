(function() {
  'use strict';
  angular.module('rounds.modules')
    .controller('OrdersEditController', OrdersEditController)

  function OrdersEditController() {
    const vm = this

    vm.results = []
  }
}());
