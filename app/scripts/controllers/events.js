'use strict';

/**
 * @ngdoc function
 * @name capstone2017App.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the capstone2017App
 */
angular.module('capstone2017App')
  .controller('EventsCtrl', function ($scope, $routeParams, events) {
    $scope.cityID = $routeParams.cityID;

    


    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
