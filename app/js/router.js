angular.module("app").config(function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider.when('/tasks', {
    templateUrl: 'index.html',
    controller: 'TasksController'
  });

  $routeProvider.otherwise({ redirectTo: '/tasks' });

});
