'use strict';

import Immutable from 'immutable';
import Reflux from 'reflux';
import Moment from 'moment-timezone';
import UserActions from 'actions/UserActionCreators';


const TimezoneStore = Reflux.createStore({

  listenables: UserActions,

  init() {
    const meta = require('moment-timezone/data/meta/latest.json');
    const now = Date.now();

    this.data = Immutable.List(
      Object.keys(meta.zones)
        .map(this._createZone.bind(this, now))
        .sort(this._sortByName)
    );
  },

  _createZone(now, zone, index) {
    const name = zone.split('/')
      .pop()
      .replace(/_/gi, ' ')
      .toLowerCase();

    return {
      zone,
      name,
      offset: Moment.tz.zone(zone).offset(now),
    };
  },

  _sortByName(a, b) {
    return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
  },

  onSearchByName(query) {
    const regexp = new RegExp('^' + query, 'i');
    let results;

    if (!query.length) {
      results = this.data.clear();
    }
    else {
      results = this.data.filter(zone => regexp.test(zone.name));
    }
    this.trigger('searchByName', {query, results});
  }

});

export default TimezoneStore;
