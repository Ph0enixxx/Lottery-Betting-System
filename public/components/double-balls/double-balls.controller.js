(function() {
  angular.module('LotteryApp').controller('DoubleBallsController', DoubleBallsController);

  function DoubleBallsController() {
    this.tabs = [
      { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
      { title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true }
    ];

    this.model = {
      name: 'Tabs'
    };

    this.redBalls = _.range(33)
    this.blueBalls = _.range(16);
  }
})();
