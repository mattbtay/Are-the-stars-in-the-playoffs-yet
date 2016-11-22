System.register("arethestars", ["angular2/core"], function($__export) {
  "use strict";
  var Component,
      View,
      Arethestars;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
    }],
    execute: function() {
      Arethestars = function() {
        function Arethestars() {
          console.info('Arethestars Component Mounted Successfully');
        }
        return ($traceurRuntime.createClass)(Arethestars, {}, {});
      }();
      $__export("Arethestars", Arethestars);
      Object.defineProperty(Arethestars, "annotations", {get: function() {
          return [new Component({selector: 'arethestars'}), new View({templateUrl: 'arethestars.html'})];
        }});
    }
  };
});
