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

    $scope.within = [
      "5",
      "10",
      "20",
      "50",
      "100"
    ];


    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
