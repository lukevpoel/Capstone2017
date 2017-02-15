'use strict';

/**
 * @ngdoc function
 * @name capstone2017App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the capstone2017App
 */



angular.module('capstone2017App')

  .controller('MainCtrl', function ($scope, event) {

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

    $scope.within = [
      '5',
      '10',
      '20',
      '50',
      '100'
    ];

    $scope.event = event.query();

    $scope.refreshCurrent = function(){
        $scope.event = event.query({
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
