angular.module("app").controller("TasksController", function ($scope, TaskResource) {
  $scope.tasks = TaskResource.query();
});
