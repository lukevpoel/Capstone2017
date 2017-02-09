'use strict';

/**
 * @ngdoc function
 * @name capstone2017App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the capstone2017App
 */
// , ['daterangepicker']
// , moment


angular.module('capstone2017App')

  .controller('MainCtrl', function ($scope, events, moment) {
    $scope.events = events.query();

    $scope.datePicker = {
      startDate: null,
      endDate: null,
    };

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
