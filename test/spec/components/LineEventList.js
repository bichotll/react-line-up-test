'use strict';

describe('LineEventList', function () {
  var React = require('react/addons');
  var LineEventList, component;

  beforeEach(function () {
    LineEventList = require('../../../src/scripts/components/LineEventList.js');
    component = React.createElement(LineEventList);
  });

  it('should create a new instance of LineEventList', function () {
    expect(component).toBeDefined();
  });
});
