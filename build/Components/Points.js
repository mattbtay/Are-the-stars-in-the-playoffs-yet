System.register("Components/Points", ["angular2/core"], function($__export) {
  "use strict";
  var Component,
      View,
      Points;
  function totalPoints() {
    return 15;
  }
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
    }],
    execute: function() {
      Points = function() {
        function Points() {
          this.points = totalPoints();
          console.info('Points Component Mounted Successfully');
        }
        return ($traceurRuntime.createClass)(Points, {}, {});
      }();
      $__export("Points", Points);
      Object.defineProperty(Points, "annotations", {get: function() {
          return [new Component({selector: 'points'}), new View({templateUrl: 'templates/Points.html'})];
        }});
    }
  };
});
