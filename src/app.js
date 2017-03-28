(function() {
  'use strict';

  angular.module('rounds', ['rounds.components', 'rounds.modules', 'rounds.routes'])

  angular.module('rounds.components', [])
  angular.module('rounds.modules', ['rounds.components'])
  angular.module('rounds.routes', ['ui.router'])
    .config(routeConfig)

  function routeConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/')
  }

}());
