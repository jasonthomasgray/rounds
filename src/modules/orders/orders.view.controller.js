(function() {
  'use strict';
  angular.module('rounds.modules')
    .controller('OrdersViewController', OrdersViewController)

  function OrdersViewController() {
    const vm = this

    vm.results = []
  }
}());
