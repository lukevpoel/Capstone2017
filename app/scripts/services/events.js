'use strict';

/**
 * @ngdoc service
 * @name capstone2017App.events
 * @description
 * # events
 * Factory in the capstone2017App.
 */
angular.module('capstone2017App')
  .factory('events', function ($http) {
    var eventAPI = 'http://api.eventful.com/json/events/search';
    return {
      query: function(eventparams){
        return $http.jsonp(eventAPI, {
          dataType: 'jsonp',
          jsonpCallbackParam: 'callback',
          params: {
            q: 'music',
            'app_key': 'mhNWqRwCNqmxbkrL',
            location: eventparams.location,
            within: eventparams.within,
            time: eventparams.time,
            keywords: eventparams.keywords,
            'image_sizes': 'block200,large,dropshadow250'
          }
        });
      }
    };
  });
