(function() {
  angular.module('LotteryApp').service('Lottery', Lottery);

  function Lottery() {
    var that = this;
    that.betList = []; 
  }
})();
