(function() {
  angular.module('LotteryApp', ['ngRoute', 'ngResource']).config(function($routeProvider) {
    $routeProvider.when('/main', {
      templateUrl: 'components/main.jade',
      controller: 'MainController',
      controllerAs: 'home'
    }).otherwise({
      redirectTo: '/main'
    });
  });
})();
