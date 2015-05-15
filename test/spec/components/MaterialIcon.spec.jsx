'use strict';

describe('MaterialIcon', function () {
  var React = require('react/addons');
  var MaterialIcon, component;

  beforeEach(function () {
    MaterialIcon = require('components/MaterialIcon.jsx');
    component = React.createElement(MaterialIcon);
  });

  it('should create a new instance of MaterialIcon', function () {
    expect(component).toBeDefined();
  });
});
