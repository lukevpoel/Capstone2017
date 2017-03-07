'use strict';

describe('Service: indevents', function () {

  // load the service's module
  beforeEach(module('capstone2017App'));

  // instantiate service
  var indevents;
  beforeEach(inject(function (_indevents_) {
    indevents = _indevents_;
  }));

  it('should do something', function () {
    expect(!!indevents).toBe(true);
  });

});
