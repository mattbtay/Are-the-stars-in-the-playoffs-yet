System.register("GamesLeft", ["angular2/core"], function($__export) {
  "use strict";
  var Component,
      View,
      GamesLeft;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
    }],
    execute: function() {
      GamesLeft = function() {
        function GamesLeft() {
          console.info('GamesLeft Component Mounted Successfully');
        }
        return ($traceurRuntime.createClass)(GamesLeft, {}, {});
      }();
      $__export("GamesLeft", GamesLeft);
      Object.defineProperty(GamesLeft, "annotations", {get: function() {
          return [new Component({selector: 'gamesleft'}), new View({templateUrl: 'GamesLeft.html'})];
        }});
    }
  };
});
