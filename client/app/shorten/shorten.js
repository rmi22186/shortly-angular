angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.links = {};

  angular.extend($scope, Links);

  $scope.addLink = function() {
    console.log('addLink Called');
    Links.postLink($scope.links)
      .then(function () {
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

});

