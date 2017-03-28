(function() {
  'use strict';
  angular.module('rounds.modules')
    .controller('PubsIndexController', PubsIndexController)

  function PubsIndexController(roundsData, orderUtils) {
    const vm = this

    vm.results = []
    vm.resultsQuery = ''

    initData()

    function initData() {
      roundsData.bars().then((bars) => {
        vm.results = bars

        roundsData.orders().then((orders) => {
          vm.recent = orders.slice(-10).reverse()
          vm.recent.forEach((order) => {
            order.bar = vm.results[order.barId-1]
            order.totalPrice = orderUtils.totalPrice(order)
            order.itemCount = orderUtils.itemCount(order)
          })
        })
      })
    }

  }
}());
