angular.module('starter').controller('LogInController', function ($scope, $http, $state) {
  // Variables
  var _that = this;
  _that.loginForm = {
    txtEmailId: '',
    txtPassword: ''
  };

  // Methods
  var _successLogIn = function (data) {
    console.log(data);
    _that.loginForm = {
      txtEmailId: '',
      txtPassword: ''
    };
    $state.go('dashboard');
  };
  var _failLogIn = function (error) {
    console.log('Error ',error);
  };

  // Events
  _that.login = function () {
    var _payload = {
      email: _that.loginForm.txtEmailId,
      password: _that.loginForm.txtPassword
    };
    $http.post('https://feedback-api.herokuapp.com/api/v1/auth/login', _payload).success(_successLogIn).error(_failLogIn);
  };

});
