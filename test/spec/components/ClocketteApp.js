'use strict';

describe('ClocketteApp', function () {
  var React = require('react');
  var ClocketteApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'ClocketteApp';
    document.body.appendChild(container);

    ClocketteApp = require('components/ClocketteApp.jsx');
    component = React.createElement(ClocketteApp);
  });

  it('should create a new instance of ClocketteApp', function () {
    expect(component).toBeDefined();
  });
});
