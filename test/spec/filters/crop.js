'use strict';

describe('Filter: crop', function () {

  // load the filter's module
  beforeEach(module('capstone2017App'));

  // initialize a new instance of the filter before each test
  var crop;
  beforeEach(inject(function ($filter) {
    crop = $filter('crop');
  }));

  it('should return the input prefixed with "crop filter:"', function () {
    var text = 'angularjs';
    expect(crop(text)).toBe('crop filter: ' + text);
  });

});
