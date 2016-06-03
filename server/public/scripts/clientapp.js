var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/createHeroes', {
      templateUrl: '/views/createHeroes.html',
      controller: "CreateController"
    })
    .when('/seeHeroes', {
      templateUrl: '/views/seeHeroes.html',
      controller: "SeeController"
    })
    .otherwise({
      redirectTo: 'seeHeroes'
    })
}]);
