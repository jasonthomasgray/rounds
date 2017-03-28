(function() {
  'use strict';
  angular.module('rounds.components')
    .factory('orderUtils', orderUtils)

  function orderUtils() {
    return {
      itemCount: itemCount,
      totalPrice: totalPrice,
    }

    function itemCount(order) {
      return Object.keys(order.products).reduce((count, key) => {
        return count + order.products[key].amount
      },0)
    }

    function totalPrice(order) {
      return Object.keys(order.products).reduce((price, key) => {
        return price + (order.products[key].price * order.products[key].amount)
      },0)
    }
  }
}());
