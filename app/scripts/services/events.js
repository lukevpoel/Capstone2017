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
    var eventAPI='http://api.eventful.com/json/events/search?app_key=mhNWqRwCNqmxbkrL';
    return {
      query: function(){
        return $http.jsonp(eventAPI, {
          jsonpCallbackParam: 'callback',
          params: {
            location: 'Seattle',
            within: '10',
            time: 'This Week',
            keywords: null
          }
        });
      }
    };
  });
