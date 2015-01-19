'use strict';

describe('LineEvent', function () {
  var React = require('react/addons');
  var LineEvent, component;

  beforeEach(function () {
    LineEvent = require('../../../src/scripts/components/LineEvent.js');
    component = React.createElement(LineEvent);
  });

  it('should create a new instance of LineEvent', function () {
    expect(component).toBeDefined();
  });
});
