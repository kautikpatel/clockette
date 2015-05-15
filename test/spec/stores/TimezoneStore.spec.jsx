'use strict';

import React from 'react/addons';
import TimezoneStore from 'stores/TimezoneStore';


describe('TimezoneStore', function() {

  it('should be defined', function() {
    expect(TimezoneStore).toBeDefined();
  });


  it('should have some data after initialization', function() {
    expect(TimezoneStore.data.size > 0).toBeTruthy();
  });


  it('should return several results when searching for `a`', function() {
    expect(TimezoneStore.searchByName('a').size > 0).toBeTruthy();
  });


  it('should return no results when searching for `0`', function() {
    expect(TimezoneStore.searchByName(0).size > 0).toBeFalsy();
  });


  it('should return 1 result when searching for `tokyo`', function() {
    expect(TimezoneStore.searchByName('Tokyo').size === 1).toBeTruthy();
  });

});
