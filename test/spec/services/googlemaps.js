'use strict';

describe('Service: googleMaps', function () {

  // load the service's module
  beforeEach(module('capstone2017App'));

  // instantiate service
  var googleMaps;
  beforeEach(inject(function (_googleMaps_) {
    googleMaps = _googleMaps_;
  }));

  it('should do something', function () {
    expect(!!googleMaps).toBe(true);
  });

});
