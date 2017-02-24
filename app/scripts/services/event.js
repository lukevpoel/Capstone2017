'use strict';

/**
 * @ngdoc service
 * @name capstone2017App.event
 * @description
 * # event
 * Factory in the capstone2017App.
 */
angular.module('capstone2017App')
  .factory('event', function ($resource) {
    // Service logic
    // ...


    // Public API here
    return $resource('http://api.eventful.com/json/events/search?q=music&l=:location&within=:distance&units=miles&t=:time&c=music&keywords=:keyword&app_key=mhNWqRwCNqmxbkrL',{}, {
      query: {
        method:'GET',
        params:{
          location: 'Seattle,us',
          within: '10',
          time: 'This Week',
          keywords: ''
        },
        isArray:true
      }
    });
  });
