angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth, $location) {

  if (Auth.isAuth()){
    $scope.data = [];
    $scope.getLinks = function() {
      Links.getLink()
        .then(function (results) {
          $scope.data.push(results);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    $scope.getLinks();
  } else {
    $location.path('/signin');
  }

$scope.signOut = function() {
    console.log('signout called');
    Auth.signout();
  };
});
