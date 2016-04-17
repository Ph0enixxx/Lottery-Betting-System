(function() {
  angular.module('LotteryApp').controller('DoubleBallsController', DoubleBallsController);

  function DoubleBallsController(appUtils) {
    var RED_BALL_NUM = 33;
    var BLUE_BALL_NUM = 16;
    var NEED_RED_NUM = 6;
    var ballCtrl = this;
    var RED_BALL = 0;
    var BLUE_BALL = 1;
    var PER_PRICE = 2;

    ballCtrl.selectBall = selectBall;
    ballCtrl.colorBallStat = [0, 0];
    ballCtrl.money = 0;
    ballCtrl.betCount = 0;
    ballCtrl.tabs = [
      { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
      { title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true }
    ];

    ballCtrl.model = {
      name: 'Tabs'
    };

    ballCtrl.redBalls = initBalls(RED_BALL_NUM);
    ballCtrl.blueBalls = initBalls(BLUE_BALL_NUM); 
    ballCtrl.redAwardBalls = _.range(1,7);
    ballCtrl.blueBall = 2;

    function selectBall(ball, color) {
      if (ball.selected) {
        ball.selected  = false;
        ballCtrl.colorBallStat[color]--;
      }
      else {
        ball.selected  = true;
        ballCtrl.colorBallStat[color]++;
      }
      ballCtrl.betCount  = appUtils.computeCxy(ballCtrl.colorBallStat[RED_BALL], NEED_RED_NUM) * ballCtrl.colorBallStat[BLUE_BALL];
      debugger;
      ballCtrl.money =  ballCtrl.betCount * PER_PRICE;
    }

    function initBalls(num){
      var balls = [];
      _(num).times(function(idx) {
        balls.push({
          index: idx + 1,
          selected: false
        });
      });

      return balls;
    }
  }
})();
