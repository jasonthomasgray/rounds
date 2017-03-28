(function() {
  'use strict';
  angular.module('rounds.modules')
    .controller('OrdersViewController', OrdersViewController)

  function OrdersViewController(roundsData, $stateParams, orderUtils) {
    const vm = this

    vm.order = {}

    initData($stateParams.id)

    function initData(id) {
      roundsData.orders(id).then((order) => {
        vm.order = order
        vm.totalPrice = orderUtils.totalPrice(order)
        return roundsData.bars(vm.order.barId)
      })
      .then((bar) => {
        vm.bar = bar
      })
      roundsData.products().then((products) => {
        vm.products = products
      })
    }

  }
}());
