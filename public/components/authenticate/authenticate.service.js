(function() {
  angular.module('LotteryApp').service('Auth', function($resource, $http) {
    var that = this;
    this.accountInfo = {};
    
    (function() {
      $http.get('/api/login').success(function (data) {
        if (data.status == 0) {
          that.accountInfo = {
            username: data.username,
            password: data.password
          }
        }
        else {
          that.accountInfo = { };
        }
      });
    })();
  
    this.account = $resource('/api/login', null, {
      verify: { method: 'POST'}
    });

    this.logout = $resource('/api/logout');
  });
})();
