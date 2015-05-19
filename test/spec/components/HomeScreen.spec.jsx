'use strict';

import React from 'react/addons';
import { $ } from 'test/helpers/clockette-utils.jsx';
import stubRouterContext from 'test/helpers/stubRouterContext';
import HomeScreen from 'components/HomeScreen.jsx';


describe('HomeScreen', function() {
  const StubbedHome = stubRouterContext(HomeScreen);
  let $component;

  beforeEach(function() {
    $component = $(<StubbedHome/>);
  });


  it('should render a clock', function() {
    expect($component.find('.HomeScreen__clock')).toBeDefined();
  });


  it('should render a date', function() {
    expect($component.find('.HomeScreen__date')).toBeDefined();
  });

});
