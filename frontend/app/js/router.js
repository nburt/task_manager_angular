angular.module("app").config(function ($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider.
    when('/tasks', {
      templateUrl: 'index.html',
      controller: 'TasksIndexController'
    }).
    otherwise({
      redirectTo: '/tasks'
    }).
    when('/tasks/:id', {
      templateUrl: 'show.html',
      controller: 'TasksDetailController'
    });

});
