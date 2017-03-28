(function() {
  'use strict';
  angular.module('rounds.routes')
    .config(pubsRoutes)

  function pubsRoutes($stateProvider) {
    $stateProvider
      .state({
        name: 'pubs-index',
        url: '/',
        templateUrl: 'modules/pubs/pubs.index.html',
        controller: 'PubsIndexController',
        controllerAs: 'vm',
      })
  }
}());
