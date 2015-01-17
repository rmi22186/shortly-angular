angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = [];
  $scope.getLinks = function() {
    console.log('getLinks Called');
    Links.getLink()
      .then(function (results) {
        $scope.data.push(results);
      })
      .then(function() {
        console.log($scope.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  $scope.getLinks();

});
