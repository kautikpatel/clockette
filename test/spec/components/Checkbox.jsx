'use strict';

describe('Checkbox', function () {
  var React = require('react/addons');
  var Checkbox, component;

  beforeEach(function () {
    Checkbox = require('components/Checkbox.jsx');
    component = React.createElement(Checkbox);
  });

  it('should create a new instance of Checkbox', function () {
    expect(component).toBeDefined();
  });
});
