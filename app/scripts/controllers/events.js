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
    $scope.eventID = $routeParams.eventID;
    $scope.refreshCurrent = function(eventID) {
      $scope.indevents = indevents.query ({
        id: eventID
      });
    };



    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
