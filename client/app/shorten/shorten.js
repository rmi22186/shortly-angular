angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {

  if(Auth.isAuth()){
    $scope.link = {};
    $scope.addLink = function() {
      Links.addLink($scope.link)
        .then(function () {
          $location.path('/links');
        })
        .catch(function (error) {
          console.error(error);
        });
    };
  } else {
    $location.path('/signin');
  }

  $scope.signOut = function() {
    Auth.signout();
  };


  $scope.isValidUrl =  function(url) {
    if (url) {
    return url.match(/^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i) ? 'valid!' : 'not a valid url';
    } else {
      return '';
    }

  };

});

