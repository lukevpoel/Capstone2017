'use strict';

/**
 * @ngdoc service
 * @name capstone2017App.indevents
 * @description
 * # indevents
 * Factory in the capstone2017App.
 */
angular.module('capstone2017App')
  .factory('indevents', function ($http) {
    var indEventAPI = 'http://api.eventful.com/json/events/get';
    return {
      query: function(indeventparams){
        return $http.jsonp(indEventAPI, {
          dataType: 'jsonp',
          jsonpCallbackParam: 'callback',
          params: {
            'app_key': 'mhNWqRwCNqmxbkrL',
            id: indeventparams.id,
            'image_sizes': 'large'
          }
        });
      }
    };

  });
