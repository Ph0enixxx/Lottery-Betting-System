(function() {
  angular.module('LotteryApp').service('appUtils', appUtils);

  function appUtils() {
    var that = this;
    that.factorial = function(num) {
      var res = 1;
      _(num).times(function(index) {
        res = res * (index + 1);
      })

      return res;
    };

    that.computeCxy = function(x, y) {
      if (x < y) return 0;
      if (x == y) return 1;
      return Math.round(that.factorial(x) / (that.factorial(y) * that.factorial(x - y)));
    }
  }
})();
