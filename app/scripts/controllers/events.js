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
    // Carousel basic information uib-carousel
    $scope.myInterval = 3000;
    $scope.noWrapSlides = false;
    $scope.active = 0;

    // Sending route information to eventful API to get specific event information
    $scope.eventID = $routeParams.eventID;
    $scope.indevents = indevents.query ({
      id: $scope.eventID
    }).then(function(data){
      $scope.eventdata = data.data;
      $scope.imagesArray = angular.isArray(data.data.images.image);
      $scope.eventImages = data.data.images.image;
    });

    // Maps Logic using ng-maps
    $scope.googleMapsUrl='https://maps.googleapis.com/maps/api/js?key=AIzaSyDM09EsXdiZzSBueXZYwxv0fhL2_LXbBAs';
    NgMap.getMap({id:'map'}).then(function(map) {
      map.showInfoWindow('markerPopup');
    });


    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  // This filter isn't working correctly. But it is necessary for html to still pipe
  // the data through this filter for now. The goal of this filter will be to
  // eliminate unnecessary email information from the description of events.
  // They are causing issues with page width.
  .filter('email', function(){
    return function(input){
      if (input === null || input === undefined){
        return input;
      }
      else if (input) {
        var email = String(input).replace(/\**\*/, '');
        return email;
      }
    };
  })
  ;
