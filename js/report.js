var app = angular.module("myApp", []);
app.controller("getReports", function ($scope, $http) {
  $scope.getResponseFn = function () {
    console.log("Checking");
    $http.get("https://jsonplaceholder.typicode.com/posts/1").then(function (response) {
      $scope.apiResponse = response.data;
    });
  }

  $scope.getEmployer = function () {

    $http.get("https://jsonplaceholder.typicode.com/posts/1/comments").then(function (response) {

      $scope.employerResponse = response.data;
    });
  }

});