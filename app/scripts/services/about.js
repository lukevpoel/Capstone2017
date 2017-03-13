'use strict';

/**
 * @ngdoc service
 * @name capstone2017App.about
 * @description
 * # about
 * Factory in the capstone2017App.
 * Meaningless controllerright now.
 */
angular.module('capstone2017App')
  .factory('about', function () {
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
