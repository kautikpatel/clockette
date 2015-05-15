'use strict';

import React from 'react/addons';
import UserStore from 'stores/UserStore';


describe('UserStore', function() {

  it('should be defined', function() {
    expect(UserStore).toBeDefined();
  });


  it('should\'nt have data by default', function() {
    expect(UserStore.data.size === 0).toBeTruthy();
  });


  it('should save data into localStorage when adding new elements in store', function() {
    UserStore.onAdd({
      zone: 'America/Los_Angeles',
      name: 'los angeles',
      offset: 420,
    });

    expect(UserStore.data.size === 1).toBeTruthy();

    let lsClockette = JSON.parse(localStorage.getItem('clockette'));
    expect(lsClockette.length === 1).toBeTruthy();
  });


  it('should remove data into localStorage when removing elements from store', function() {
    let item = UserStore.data.first();
    UserStore.onRemove(item);

    expect(UserStore.data.size === 0).toBeTruthy();

    let lsClockette = JSON.parse(localStorage.getItem('clockette'));
    expect(lsClockette.length === 0).toBeTruthy();
  });

});
