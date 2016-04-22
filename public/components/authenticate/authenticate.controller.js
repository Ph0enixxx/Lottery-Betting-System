(function() {
  angular.module('LotteryApp').controller('AuthenticateController', AuthenticateController);

  function AuthenticateController() {
    var auth = this;
    auth.username = '';
    auth.password = '';
    auth.login = login;

    function login() {
      debugger;
    }
  }
})()
