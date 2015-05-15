'use strict';

import Reflux from 'reflux';
import Immutable from 'immutable';
import Moment from 'moment-timezone';


const TimezoneStore = Reflux.createStore({

  init() {
    const meta = require('moment-timezone/data/meta/latest.json');
    const now = Date.now();
    const zoneList = Object.keys(meta.zones)
      .map((zone) => {
        const name = zone.split('/')
          .pop()
          .replace(/_/gi, ' ')
          .toLowerCase();

        return {
          zone,
          name,
          offset: Moment.tz.zone(zone).offset(now),
        };
      })
      .sort((a, b) => {
        return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
      });

    this.data = Immutable.List(zoneList);
  },

  searchByName(name) {
    const regex = new RegExp(name, 'i');
    return this.data.filter((zone) => regex.test(zone.name));
  }

});

export default TimezoneStore;
