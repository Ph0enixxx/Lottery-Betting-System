(function() {
  angular.module('LotteryApp').controller('HeadCtrl', HeadCtrl);

  function HeadCtrl($scope, $window, Auth) {
    var head = this;
    head.logout = logout;
    head.Auth = Auth
    $scope.$watch('head.Auth.accountInfo.username', function(val) {
      if (val) {
        head.username = val;
      }
    });

    function logout() {
      Auth.logout.get().$promise.then(function() {
        $window.location.href = '/#/authenticate';
      });
    }
  }
})();
