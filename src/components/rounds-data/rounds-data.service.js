(function() {
  'use strict';
  angular.module('rounds.components')
    .factory('roundsData', roundsData)

  function roundsData($http, $q, $window) {

    var dataFunctions = {
      products: products,
      bars: bars,
      orders: orders,
    }
    dataFunctions.orders.save = ordersSave

    return dataFunctions

    function products(barId) {
      if (!barId) return $http.get('components/rounds-data/products.json').then(response => response.data);
      return $q.all({
          prices: $http.get('components/rounds-data/current-prices-' + barId + '.json'),
          products: $http.get('components/rounds-data/products.json'),
        })
        .then((response) => {
          return response.prices.data.map((price) => {
            const product = response.products.data[price.product_id]
            return {
              name: product.name,
              image_url: 'components/rounds-data/beerImages/' + product.id % 8 + '.jpg',
              id: product.id,
              current_price: price.current_price,
            }
          })
        })
    }

    function bars(id) {
      return $http.get('components/rounds-data/bars.json')
        .then((response) => {
          if (id) {
            return response.data.find(bar => bar.id === id)
          }
          return response.data
        })
    }

    function orders(id) {
      if (id) {
        return $q.when(JSON.parse($window.localStorage.getItem('order:' + id)))
      }

      // since localStorage key order isn't guaranteed lets just loop back over ids checking if they exists
      var mostRecentId = parseInt($window.localStorage.getItem('idOrders'), 10)
      var recentOrders = [];
      if (mostRecentId) {
        for (var i = mostRecentId; i > 0; i--) {
          const order = JSON.parse(localStorage.getItem('order:' + i))
          if (order) {
            if (recentOrders.push(order) >=10) { // add upto ten orders
              break;
            }
          }
        }
      }
      return $q.when(recentOrders)
    }

    function ordersSave(order) {
      if (!order.id) {
        order.id = nextOrderId()
      }
      // remove 0 orders
      Object.keys(order.products).forEach((key) => {
        if (order.products[key].amount < 1) {
          delete order.products[key]
        }
      })
      $window.localStorage.setItem('order:' + order.id, JSON.stringify(order))
      return $q.when(order.id)
    }

    function nextOrderId() {
      if (!$window.localStorage.idOrders) {
        $window.localStorage.idOrders = 0
      }
      return ++$window.localStorage.idOrders
    }
  }
}());
