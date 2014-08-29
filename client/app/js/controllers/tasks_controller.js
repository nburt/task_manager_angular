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

  $scope.submitShortcut = function ($event) {
    if ($event.ctrlKey == true && $event.keyIdentifier == "Enter") {
      $scope.addTask();
    }
  };
});

angular.module("app").controller("TasksDetailController", function ($scope, $routeParams, $http, $location) {
  $scope.showEditForm = false;
  $scope.editedTask = null;

  $scope.displayEditForm = function () {
    $scope.showEditForm = true;
    $scope.editedTask = angular.copy($scope.task);
  };

  $scope.hideEditForm = function () {
    $scope.editedTask = angular.copy($scope.task);
    $scope.resetForm();
  };

  $scope.resetForm = function () {
    $scope.editedTask = $scope.task;
    $scope.showEditForm = false;
  };

  $scope.editTask = function () {
    $http.put(
        "/api/tasks/" +
        $routeParams.id +
        "?name=" +
        $scope.editedTask.name +
        "&description=" +
        $scope.editedTask.description
    ).success(function (data) {
        $scope.task = data;
        $scope.showEditForm = false;
      });
  };

  $scope.deleteTask = function () {
    $http.delete("/api/tasks/" + $routeParams.id).success(function () {
      $location.path("/");
    });
  };

  $http.get("/api/tasks/" + $routeParams.id).success(function (data) {
    $scope.task = data;
  });
});
