angular.module("app").controller("TasksIndexController", function ($scope, TaskResource) {
  $scope.tasks = TaskResource.query();
});

angular.module("app").controller("TasksDetailController", function ($scope, $routeParams, $http) {
  $http.get("/api/tasks/" + $routeParams.id).success(function (data) {
    $scope.task = data;
  });
});
