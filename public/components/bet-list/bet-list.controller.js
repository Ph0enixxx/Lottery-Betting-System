(function() {
  angular.module('LotteryApp').controller('BetListController', BetListController);

  function BetListController($uibModal, Lottery) {
    var BetList = this;
    BetList.list = Lottery.betList;
    BetList.checkList = checkList;

    function checkList(bet, type) {
      var newWidgetModalInstanceCtrl = ['$scope', '$uibModalInstance', 'bet', 'type', function($scope, $uibModalInstance, bet, type) {
        $scope.bets = bet;
        $scope.type = type;
        $scope.cancel = function() {
          $uibModalInstance.close();
        }
      }];

      $uibModal.open({
        templateUrl: 'components/bet-list/result',
        controller: newWidgetModalInstanceCtrl,
        size: 'super',
        resolve: {
          bet: function() {
            return bet;
          },
          type: function() {
            return type; 
          }
        }
      });
    }
  }
})();
