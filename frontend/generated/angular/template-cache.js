angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("index.html",
    "<ul ng-repeat=\"task in tasks\">\n" +
    "  <li>{{task.name}}</li>\n" +
    "  <li>{{task.description}}</li>\n" +
    "  <li>{{task.updated_at}}</li>\n" +
    "</ul>"
  );

}]);
