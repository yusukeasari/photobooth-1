var photoBoothApp = angular.module('photoBooth', [])

photoBoothApp.controller('MainCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {

    $scope.takePicture = function () {
      $http.post('/pictures.json').success(function (data) {
        $scope.picture_sets.unshift(data);
      }).error(function (data) {
        alert(data);
      })
    };


    $scope.update = function () {
      $http.get('/pictures.json').success(function (data) {
        $scope.picture_sets = data;
      }).error(function (data) {
        alert(data);
      })
    };

    $scope.update();

  }]);