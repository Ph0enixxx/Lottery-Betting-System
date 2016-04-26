(function() {
  angular.module('LotteryApp').controller('AuthenticateController', AuthenticateController);

  function AuthenticateController($window, Auth) {
    var auth = this;
    auth.username = '';
    auth.password = '';
    auth.login = login;

    function login() {
      if (auth.username == '') {
        alert('请输入用户名！')
      }
      else if (auth.password == '') {
        alert('请输入密码！')
      }
      else {
        Auth.account.verify({}, {
          username: auth.username,
          password: auth.password
        }).$promise.then(function(data) {
          if (data.status == 0) {
            Auth.accountInfo.username = auth.username;
            $window.location.href = '/';
          }
          else {
            auth.msg = data.msg;
          }
        });
      }
    }
  }
})()
