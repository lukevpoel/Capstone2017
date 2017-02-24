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

    $scope.dates = [
      'All',
      'Today',
      'This Week',
      'Next Week',
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    $scope.distance = [
      '5',
      '10',
      '20',
      '50',
      '100'
    ];

    $scope.events = events.query();

    $scope.refreshCurrent = function(){
        $scope.events = events.query({
            location: $scope.location,
            within: $scope.within,
            time: $scope.time,
            keywords: $scope.keywords
        });
    };

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
