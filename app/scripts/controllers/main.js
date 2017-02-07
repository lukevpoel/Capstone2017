'use strict';

/**
 * @ngdoc function
 * @name capstone2017App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the capstone2017App
 */
angular.module('capstone2017App')
  .controller('MainCtrl', function ($scope, events) {
    $scope.events = events.query();

    $scope.refreshCurrent = function(){
        $scope.events = events.query({
            location: $scope.location
        });
    };

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
