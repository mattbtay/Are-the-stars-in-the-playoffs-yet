System.register("index", ["angular2/core", "angular2/platform/browser", "Components/GamesLeft", "Components/Points"], function($__export) {
  "use strict";
  var Component,
      View,
      bootstrap,
      GamesLeft,
      Points,
      Main;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
    }, function($__m) {
      bootstrap = $__m.bootstrap;
    }, function($__m) {
      GamesLeft = $__m.GamesLeft;
    }, function($__m) {
      Points = $__m.Points;
    }],
    execute: function() {
      Main = function() {
        function Main() {}
        return ($traceurRuntime.createClass)(Main, {}, {});
      }();
      Object.defineProperty(Main, "annotations", {get: function() {
          return [new Component({selector: 'main'}), new View({
            directives: [GamesLeft, Points],
            templateUrl: 'templates/datarow.html'
          })];
        }});
      bootstrap(Main);
    }
  };
});
