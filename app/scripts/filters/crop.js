'use strict';

/**
 * @ngdoc filter
 * @name capstone2017App.filter:crop
 * @function
 * @description
 * # crop
 * Filter in the capstone2017App.
 * Allows truncation of primary text in main.html
 * Truncates by words and adds ellipses
 */
angular.module('capstone2017App')
  .filter('crop', function(){
    return function(input, limit, respectWordBoundaries, suffix){
      if (input === null || input === undefined || limit === null || limit === undefined || limit === '') {
        return input;
       }
       if (angular.isUndefined(respectWordBoundaries)) {
        respectWordBoundaries = true;
       }
       if (angular.isUndefined(suffix)) {
        suffix = '...';
       }
         if (input.length <= limit) {
        return input;
       }
       limit = limit - suffix.length;
       var trimmedString = input.substr(0, limit);
       if (respectWordBoundaries) {
        return trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' '))) + suffix;
       }
       return trimmedString + suffix;
      };
    });
