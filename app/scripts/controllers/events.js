'use strict';

/**
 * @ngdoc function
 * @name capstone2017App.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the capstone2017App
 */
angular.module('capstone2017App')
  .controller('EventsCtrl', function ($scope, $route, $routeParams, $location, indevents, NgMap) {
    $scope.myInterval = 3000;

    // Sending route information to eventful API to get specific event information
    $scope.eventID = $routeParams.eventID;
    $scope.indevents = indevents.query ({
      id: $scope.eventID
    }).then(function(data){
      $scope.eventdata = data.data;
      $scope.imagesArray = angular.isArray(data.data.images.image);
    });


    // Maps Logic
    $scope.googleMapsUrl='https://maps.googleapis.com/maps/api/js?key=AIzaSyDM09EsXdiZzSBueXZYwxv0fhL2_LXbBAs';
    NgMap.getMap({id:'map'}).then(function(map) {
      map.showInfoWindow('markerPopup');
    });


    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
