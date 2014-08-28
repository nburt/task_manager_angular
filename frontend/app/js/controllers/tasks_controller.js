angular.module("app").controller("TasksIndexController", function ($scope, TaskResource, $http) {
  $scope.tasks = TaskResource.query();

  $scope.showAddForm = false;

  $scope.filter = '-updated_at';

  $scope.displayAddForm = function () {
    $scope.showAddForm = true;
  };

  $scope.hideAddForm = function () {
    $scope.resetForm();
  };

  $scope.addTask = function () {
    $http.post(
        '/api/tasks?name=' +
        $scope.task.name +
        "&description=" +
        $scope.task.description
    ).success(function (data) {
        $scope.tasks.push(data);
        $scope.resetForm();
      });
  };

  $scope.resetForm = function () {
    $scope.task = {};
    $scope.showAddForm = false;
  };
});

angular.module("app").controller("TasksDetailController", function ($scope, $routeParams, $http) {
  $http.get("/api/tasks/" + $routeParams.id).success(function (data) {
    $scope.task = data;
  });
});
