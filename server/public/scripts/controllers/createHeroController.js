myApp.controller('CreateController', ['$scope', '$http', '$window', '$location', function($scope, $http, $window, $location) {
  console.log('create controller running');
  $scope.hero = {};
  $scope.powers = {};
  // $scope.powers = [{
  //   power_name: 'Invisibility'
  // }, {
  //   power_name: 'Flight'
  // }, {
  //   power_name: 'Super Speed'
  // }, {
  //   power_name: 'Heat Vision'
  // }, {
  //   power_name: 'Super Strength'
  // }, {
  //   power_name: 'Accelerated Healing'
  // }, {
  //   power_name: 'Power Blast'
  // }, {
  //   power_name: 'Animal Affinity'
  // }];

console.log($scope.powers);

  $scope.getPowerData = function () {
    console.log('this is running');
    $http.get('/createHeroes').then(function(response) {
      console.log(response.data);
    $scope.powers = response.data;
  });
}

  $scope.createHero = function () {

    $scope.hero.power_name = $scope.hero.power_name.power_name;
    $http.post('/createHeroes', $scope.hero)
    .then(function (){
      console.log($scope.hero);
      console.log('POST /createHeroes');
    })
}
}]);
