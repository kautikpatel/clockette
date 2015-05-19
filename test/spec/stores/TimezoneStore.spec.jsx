'use strict';

import React from 'react/addons';
import TimezoneStore from 'stores/TimezoneStore';
import UserActions from 'actions/UserActionCreators';
import { spyOnActionHandler } from 'test/helpers/clockette-utils';


describe('TimezoneStore', function() {

  it('should be defined', function() {
    expect(TimezoneStore).toBeDefined();
  });


  it('should be hydrated after initialization', function() {
    expect(TimezoneStore.data.size > 0).toBeTruthy();
  });

  it('should call onSearchByName when triggering UserActions.searchByName', function() {
    const spy = spyOnActionHandler({
      store: TimezoneStore,
      method: 'onSearchByName',
      action: UserActions.searchByName
    });
    spy.action.trigger('a');
    expect(spy.callback).toHaveBeenCalled();
  });

});
