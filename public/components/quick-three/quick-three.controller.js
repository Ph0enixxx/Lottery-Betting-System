(function() {
  angular.module('LotteryApp').controller('QuickThreeController', QuickThreeController);

  function QuickThreeController(appUtils) {
    var quickThree = this;
    quickThree.balls = _.range(1, 7);
  }
})();
