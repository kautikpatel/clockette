'use strict';

describe('AddTimezoneScreen', function () {
  var React = require('react/addons');
  var AddTimezoneScreen, component;

  beforeEach(function () {
    AddTimezoneScreen = require('components/AddTimezoneScreen.jsx');
    component = React.createElement(AddTimezoneScreen);
  });

  it('should create a new instance of AddTimezoneScreen', function () {
    expect(component).toBeDefined();
  });
});
