angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function() {
    console.log('addLink Called');
    Links.addLink($scope.link)
      .then(function () {
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

});

