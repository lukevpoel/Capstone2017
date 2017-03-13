'use strict';

/**
 * @ngdoc service
 * @name capstone2017App.googleMaps
 * @description
 * # googleMaps
 * Factory in the capstone2017App.
 * Used in events view. ng-maps controls the url variables for the actual API call
 */
angular.module('capstone2017App')
  .factory('googleMaps', function (uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.cofigure({
      key: 'AIzaSyAmR-tixjucCiUE3229GKl_QZd1LfsheCw',
      v: '3.20',
      libraries: 'weather,geometry,visualization'
    });
  });
