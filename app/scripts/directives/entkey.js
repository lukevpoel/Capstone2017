'use strict';

/**
 * @ngdoc directive
 * @name capstone2017App.directive:entKey
 * @description
 * # entKey
 * Adds the enter key to the input fields allowing user
 * to refresh the search without needing to use the mouse to click refresh
 */
angular.module('capstone2017App')
.directive('entKey', function () {
  return function (scope, element, attrs) {
    element.bind('keydown keypress', function (event) {
      if(event.which === 13) { // 13 = enter key
        scope.$apply(function (){
          scope.$eval(attrs.entKey);
        });
        event.stopPropagation();
        event.preventDefault();
      }
    });
  };
});
