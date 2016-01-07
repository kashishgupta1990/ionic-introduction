angular.module('starter').controller('DashboardController', function ($scope, $http) {

  // Variables
  var _that = this;
  _that.loginForm = {
    txtEmailId: '',
    txtPassword: ''
  };

  // Events
  _that.login = function () {
    console.log($scope.loginForm);
  };

})
;
