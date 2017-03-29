(function() {
  'use strict';
  angular.module('rounds.modules')
    .controller('OrdersEditController', OrdersEditController)

  function OrdersEditController(roundsData, $stateParams, $state, orderUtils) {
    const vm = this

    vm.bar = {}
    vm.products = []
    vm.order = {
      products: {},
    }

    vm.addToOrder = addToOrder
    vm.removeFromOrder = removeFromOrder
    vm.isInOrder = isInOrder
    vm.totalDrinks = totalDrinks
    vm.totalPrice = totalPrice
    vm.saveOrder = saveOrder

    if ($stateParams.bar) {
      initBar($stateParams.bar)
    }
    else {
      initOrder($stateParams.id)
    }

    function initOrder(orderId) {
      vm.order = null // signifies loading
      roundsData.orders(orderId).then((order) => {
        vm.order = order
        initBar(vm.order.barId)
      })
    }

    function initBar(barId) {
      vm.order.barId = barId
      roundsData.bars(barId).then((bar) => {
        vm.bar = bar
      })

      roundsData.products(barId).then((products) => {
        vm.products = products
      })
    }

    function addToOrder(product) {
      if (!vm.order.products[product.id]) {
        vm.order.products[product.id] = {
          amount: 0,
          price: product.current_price,
        }
      }
      vm.order.products[product.id].amount++
    }

    function removeFromOrder(product) {
      vm.order.products[product.id].amount--
    }

    function isInOrder(product) {
      return vm.order.products[product.id] && vm.order.products[product.id].amount > 0
    }

    function totalDrinks() {
      return orderUtils.itemCount(vm.order)
    }

    function totalPrice() {
      return orderUtils.totalPrice(vm.order)
    }

    function saveOrder() {
      roundsData.orders.save(vm.order).then((id) => {
        $state.go('orders-view', {id: id})
      })
    }
  }
}());
