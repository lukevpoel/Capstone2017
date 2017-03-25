'use strict';

/**
 * @ngdoc function
 * @name capstone2017App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the capstone2017App
 */



angular.module('capstone2017App')

  .controller('MainCtrl', function ($scope, $route, $routeParams, $location, events) {
    // Selection controller variables
    $scope.dates = [
      'All',
      'Future',
      'Past',
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

    $scope.location = null;
    $scope.time = null;
    $scope.within = null;
    $scope.distance = [
      '5',
      '10',
      '20',
      '50',
      '100'
    ];
    $scope.keywords = null;

    // See events button logic
    $scope.refreshCurrent = function(time, within, location, keywords){
        $scope.events = events.query({
          location: location,
          within: within,
          time: time,
          keywords: keywords
        }).then(function(data){
          $scope.eventdata = data.data.events;
        });
        $scope.searchLocation = $scope.location;
        $scope.searchWithin = $scope.within;
        $scope.searchKeyword = $scope.keywords;
        $scope.searchTime = $scope.time;
    };

    // Limit description length - unnecessary with crop filter
    $scope.descLength = 300;
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
