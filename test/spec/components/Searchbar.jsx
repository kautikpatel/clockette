'use strict';

describe('Searchbar', function () {
  var React = require('react/addons');
  var Searchbar, component;

  beforeEach(function () {
    Searchbar = require('components/Searchbar.jsx');
    component = React.createElement(Searchbar);
  });

  it('should create a new instance of Searchbar', function () {
    expect(component).toBeDefined();
  });
});
