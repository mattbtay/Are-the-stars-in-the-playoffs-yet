System.register("Components/GamesLeft", ["angular2/core"], function($__export) {
  "use strict";
  var Component,
      View,
      GamesLeft;
  function totalGamesLeft() {
    return 30;
  }
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
    }],
    execute: function() {
      GamesLeft = function() {
        function GamesLeft() {
          this.gamesRemaining = totalGamesLeft();
          console.info('GamesLeft Component Mounted Successfully');
        }
        return ($traceurRuntime.createClass)(GamesLeft, {}, {});
      }();
      $__export("GamesLeft", GamesLeft);
      Object.defineProperty(GamesLeft, "annotations", {get: function() {
          return [new Component({selector: 'gamesleft'}), new View({templateUrl: 'templates/GamesLeft.html'})];
        }});
    }
  };
});
