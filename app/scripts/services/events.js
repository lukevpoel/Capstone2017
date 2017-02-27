'use strict';

/**
 * @ngdoc service
 * @name capstone2017App.events
 * @description
 * # events
 * Factory in the capstone2017App.
 */
angular.module('capstone2017App')
  .factory('events', function ($http, $sce) {
    var eventAPI='http://api.eventful.com/json/events/search';
    $sce.trustAsResourceUrl(eventAPI);
    return {
      query: function(){
        return $http.jsonp(eventAPI, {
          jsonpCallbackParam: 'callback',
          params: {
            q: 'music',
            'app_key': 'mhNWqRwCNqmxbkrL',
            location: 'Seattle',
            within: '10',
            time: 'This Month',
            keywords: null
          }
        }).then(function(data) {
          console.log(data);
        });
      }
    };
  });
