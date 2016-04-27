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
    }).when('/quick-three', {
      templateUrl: '/components/quick-three/quick-three',
      controller: 'QuickThreeController',
      controllerAs: 'quickThree'
    }).when('/big-fun', {
      templateUrl: '/components/big-fun/big-fun',
      controller: 'BigFunController',
      controllerAs: 'bigFun'
    }).otherwise({
      redirectTo: '/main'
    });
  });
})();
