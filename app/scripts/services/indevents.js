'use strict';

/**
 * @ngdoc service
 * @name capstone2017App.indevents
 * @description
 * # indevents
 * Factory in the capstone2017App.
 */
angular.module('capstone2017App')
  .factory('indevents', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
