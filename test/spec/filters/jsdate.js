'use strict';

describe('Filter: jsDate', function () {

  // load the filter's module
  beforeEach(module('capstone2017App'));

  // initialize a new instance of the filter before each test
  var jsDate;
  beforeEach(inject(function ($filter) {
    jsDate = $filter('jsDate');
  }));

  it('should return the input prefixed with "jsDate filter:"', function () {
    var text = 'angularjs';
    expect(jsDate(text)).toBe('jsDate filter: ' + text);
  });

});
