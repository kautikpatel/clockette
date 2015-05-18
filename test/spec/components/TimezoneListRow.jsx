'use strict';

describe('TimezoneListRow', function () {
  var React = require('react/addons');
  var TimezoneListRow, component;

  beforeEach(function () {
    TimezoneListRow = require('components/TimezoneListRow.jsx');
    component = React.createElement(TimezoneListRow);
  });

  it('should create a new instance of TimezoneListRow', function () {
    expect(component).toBeDefined();
  });
});
