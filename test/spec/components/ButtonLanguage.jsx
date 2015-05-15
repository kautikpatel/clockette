'use strict';

describe('ButtonLanguage', function () {
  var React = require('react/addons');
  var ButtonLanguage, component;

  beforeEach(function () {
    ButtonLanguage = require('components/ButtonLanguage.jsx');
    component = React.createElement(ButtonLanguage);
  });

  it('should create a new instance of ButtonLanguage', function () {
    expect(component).toBeDefined();
  });
});
