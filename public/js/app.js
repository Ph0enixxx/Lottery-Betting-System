(function() {
  angular.module('LotteryApp', ['ngRoute', 'ngResource', 'ui.bootstrap']).config(function($routeProvider) {
    $routeProvider.when('/main', {
      templateUrl: '/components/main/main',
      controller: 'MainController',
      controllerAs: 'home'
    }).when('/double-balls', {
      templateUrl: '/components/double-balls/double-balls',
      controller: 'DoubleBallsController',
      controllerAs: 'dbPage'
    }).when('/authenticate', {
      templateUrl: '/components/authenticate/authenticate',
      controller: 'AuthenticateController',
      controllerAs: 'auth'
    }).otherwise({
      redirectTo: '/main'
    });
  });
})();
