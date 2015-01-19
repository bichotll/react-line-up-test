'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var TestReactLineUpApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    TestReactLineUpApp = require('../../../src/scripts/components/TestReactLineUpApp.js');
    component = React.createElement(TestReactLineUpApp);
  });

  it('should create a new instance of TestReactLineUpApp', function () {
    expect(component).toBeDefined();
  });
});
