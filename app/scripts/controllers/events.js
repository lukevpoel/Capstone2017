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
    $scope.indevents = indevents.query ({
      id: $scope.eventID
    }).then(function(data){
      $scope.eventdata = data.data;
      $scope.imagesArray = angular.isArray(data.data.images.image);
    });
    angular.extend($scope, {
      defaults: {
        scrollWheelZoom: false
      }
    });


    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
