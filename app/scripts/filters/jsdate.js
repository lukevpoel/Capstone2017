'use strict';

/**
 * @ngdoc filter
 * @name capstone2017App.filter:jsDate
 * @function
 * @description
 * # jsDate
 * Filter in the capstone2017App.
 */
angular.module('capstone2017App')
.filter('jsDate', function () {
  return function (x) {
      return new Date(x);
  };
});
