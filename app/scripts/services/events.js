'use strict';

/**
 * @ngdoc service
 * @name capstone2017App.events
 * @description
 * # events
 * Factory in the capstone2017App.
 */
angular.module('capstone2017App')
  .factory('events', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.eventful.com/rest/events/search?q=music&l=:location&within=:distance&units=miles&t=:time&c=music&app_key=mhNWqRwCNqmxbkrL',{}, {
      query: {
        method:'GET',
        params:{
          location: 'Seattle,us'
        },
        isArray:false
      }
    });
  });
