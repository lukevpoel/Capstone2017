'use strict';

/**
 * @ngdoc filter
 * @name capstone2017App.filter:jsDate
 * @function
 * @description
 * # jsDate
 * Filter in the capstone2017App.
 * Allows dates to be formatted correctly by getting the string from the API
 * and returning a javascript date object.
 */
angular.module('capstone2017App')
.filter('jsDate', function () {
  return function (x) {
      return new Date(x);
  };
});
