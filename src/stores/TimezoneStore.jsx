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

  _createZone(now, zone) {
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

  getSeq() {
    return this.data.toIndexedSeq();
  },

  /**
   * Get Zones when <key> matches <value>
   *
   * @param key String Zone object property
   * @param value Mixed property value to match against
   * @returns Seq<Zone>
   */
  getBy(key, value) {
    return this.getSeq().filter(tz => tz[key] === value);
  },

  /**
   * Perform a search on zone names beginning by a string
   *
   * @param query String search term
   * @trigger { query: String, results: Seq<Zone> }
   * @return void
   */
  onSearchByName(query) {
    const regexp = new RegExp('^' + query, 'i');
    let results;

    if (!query.length) {
      results = Immutable.Seq();
    }
    else {
      results = this.getSeq().filter(zone => regexp.test(zone.name));
    }
    this.trigger('searchByName', {query, results});
  }

});

export default TimezoneStore;
