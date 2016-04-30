(function() {
  angular.module('LotteryApp').controller('QuickThreeController', QuickThreeController);

  function QuickThreeController($scope, appUtils, $timeout) {
    var quickThree = this;
    var NEED_BALL_NUM = 3;
    var BALL_SUM = 6;
    var PRICE = 2;
    quickThree.balls = [];
    quickThree.minute = 59;
    quickThree.seconds = 59;
    quickThree.mseconds = 59;
    quickThree.money = 0;
    quickThree.totalBill = 0;
    quickThree.betList = [];
    quickThree.betNum = 0;
    quickThree.selectSum = 0;
    quickThree.addNum = addNum;
    quickThree.subNum = subNum;
    quickThree.selectBall = selectBall;
    quickThree.makeOneBet = makeOneBet;
    quickThree.randomOneBet = randomOneBet;
    quickThree.randomTime = 5;
    quickThree.randomMultiBets = randomMultiBets;
    quickThree.deleteBet = deleteBet;
    quickThree.clearList = clearList;
    quickThree.betTimes = 1;
    quickThree.betWeight = 1;
    timing();
    makeBalls();

    function addNum(field) {
      quickThree[field]++;
      computeTotalMoney();
    }
    
    function subNum(field) {
      quickThree[field] --;
      computeTotalMoney();
    }

    function randomMultiBets(time) {
      _(time).times(function() {
        randomOneBet();
      });
    }

    function clearList() {
      quickThree.betList = [];
      computeTotalMoney();
    }
    
    function randomOneBet() {
      var cnt = 0;
      var num;
      clearBalls();
      while(cnt < NEED_BALL_NUM) {
        num = Math.ceil(Math.random() * BALL_SUM);
        if (!quickThree.balls[num - 1].select) {
          quickThree.balls[num - 1].select = true;
          cnt ++;
        }
      }
      quickThree.money = PRICE;
      makeOneBet();
    }

    function deleteBet(index) {
      quickThree.betList.splice(index, 1);
      computeTotalMoney();
    }

    function selectBall(idx) {
      if (quickThree.balls[idx].select) {
        quickThree.selectSum --;
        quickThree.balls[idx].select = false;
      }
      else {
        quickThree.selectSum ++;
        quickThree.balls[idx].select = true;
      }
      quickThree.betNum = appUtils.computeCxy(quickThree.selectSum, NEED_BALL_NUM);
      quickThree.money = quickThree.betNum * PRICE;
    }

    function makeOneBet() {
      var ballList = [];
      _.each(quickThree.balls, function(ball) {
        if (ball.select) {
          ballList.push(ball.ballNum);
          ball.select = false;
        }
      });

      quickThree.betList.push({
        ball: ballList.join(' '),
        money: quickThree.money
      });
      computeTotalMoney();
      quickThree.money = 0;
      quickThree.betNum = 0;
      quickThree.selectSum = 0;
    }

    function computeTotalMoney() {
      var total = 0;
      _.each(quickThree.betList, function(bet) {
        total += bet.money;
      });
      quickThree.totalBill = total * quickThree.betTimes * quickThree.betWeight;
    }

    function clearBalls(){
      _.each(quickThree.balls,  function(ball) {
          ball.select = false;
        }
      );
    }

    function makeBalls() {
      _(6).times(function(idx) {
        quickThree.balls.push({
          ballNum: idx + 1,
          select: false
        });
      });
    }
    
    function timing() {
      var f = false;
      quickThree.mseconds -= 1;
      if (quickThree.mseconds < 0) {
        quickThree.mseconds += 59;
        quickThree.seconds --;
      }

      if (quickThree.seconds < 0) {
        quickThree.seconds += 59;
        quickThree.minute --;
      }

      if (quickThree.minute < 0) {
        quickThree.minute = 59;
        quickThree.seconds = 59;
        quickThree.mseconds = 59;
      }

      quickThree.timingString = toTimingString(quickThree.minute) + ':' + 
                            toTimingString(quickThree.seconds) + ':' +
                            toTimingString(quickThree.mseconds);
      quickThree.timer = $timeout(timing, 10);
    }

    function toTimingString(val) {
      return  val < 10 ? '0' + val : val + '';
    }

    $scope.$on('$detroy', function() {
      $timeout.cancel(quickThree.timer);
    });
  }
})();
