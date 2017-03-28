(function() {
  'use strict';
  angular.module('rounds.routes')
    .config(ordersRoutes)

  function ordersRoutes($stateProvider) {
    $stateProvider
      .state({
        name: 'orders-index',
        url: '/orders',
        templateUrl: 'modules/orders/orders.index.html',
        controller: 'OrdersIndexController',
        controllerAs: 'vm',
      })
      .state({
        name: 'orders-view',
        url: '/orders/{id:int}',
        templateUrl: 'modules/orders/orders.view.html',
        controller: 'OrdersViewController',
        controllerAs: 'vm',
      })
      .state({
        name: 'orders-new',
        url: '/orders/new/{bar:int}',
        templateUrl: 'modules/orders/orders.edit.html',
        controller: 'OrdersEditController',
        controllerAs: 'vm',
      })
      .state({
        name: 'orders-edit',
        url: '/orders/{id:int}/edit',
        templateUrl: 'modules/orders/orders.edit.html',
        controller: 'OrdersEditController',
        controllerAs: 'vm',
      })
  }
}());
