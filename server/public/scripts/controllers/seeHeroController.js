myApp.controller('SeeController', ['$scope', '$http', '$window', '$location', function($scope, $http, $window, $location) {
  $scope.heroesArray = [];
  $scope.powersArray = [];
  console.log(getHeroData());
  
  function getHeroData() {
       $http.get('/seeHeroes').then(function(response) {

         $scope.heroesArray = response.data;

      });
    }

}]);
