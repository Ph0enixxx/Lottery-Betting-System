(function() {
  var app = angular.module('LotteryApp');
  app.filter('limitString', function() { 
    return function(input, limit) {
      if (input.length < limit) {
        return input;
      }
      else {
        return input.substr(0, limit) + '...';
      }
    }
  });
})();
