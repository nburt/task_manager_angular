angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("index.html",
    "<div class=\"tasks-container\">\n" +
    "  <ul ng-repeat=\"task in tasks\">\n" +
    "    <li>{{task.name}} - {{task.updated_at | date: 'short'}}</li>\n" +
    "    <li>{{task.description}}</li>\n" +
    "  </ul>\n" +
    "</div>"
  );

}]);
