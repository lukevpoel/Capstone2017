'use strict';

/**
 * @ngdoc function
 * @name capstone2017App.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the capstone2017App
 */
angular.module('capstone2017App')
  .controller('EventsCtrl', function ($scope, $route, $routeParams, $location, indevents) {
    $scope.numbers = [
      '5',
      '10',
      '20',
      '50',
      '100'
    ];

    $scope.eventID = $routeParams.eventID;
    $scope.indevents = indevents.query ({
      id: $scope.eventID
    });


    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
