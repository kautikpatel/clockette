'use strict';

import React from 'react/addons';
import $ from 'test/helpers/clockette-utils.jsx';


describe('HomeScreen', function() {
  var Home, $component;

  beforeEach(function() {
    Home = require('components/HomeScreen.jsx');
    $component = $(<Home/>);
  });


  it('should render a clock', function() {
    expect($component.find('.HomeScreen__clock')).toBeDefined();
  });


  it('should render a date', function() {
    expect($component.find('.HomeScreen__date')).toBeDefined();
  });

});
