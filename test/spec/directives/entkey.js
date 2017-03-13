'use strict';

describe('Directive: entKey', function () {

  // load the directive's module
  beforeEach(module('capstone2017App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ent-key></ent-key>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the entKey directive');
  }));
});
