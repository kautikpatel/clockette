'use strict';

import React from 'react/addons';
import Immutable from 'immutable';

import TimezoneListRow from './TimezoneListRow';

import TimezoneStore from 'stores/TimezoneStore';
import UserStore from 'stores/UserStore';

const { PureRenderMixin } = React.addons;


const AvailableTimezonesList = React.createClass({

  mixins: [PureRenderMixin],

  getInitialState() {
    return {
      list: TimezoneStore.getSeq().filter(
        (timezone) => !UserStore.data.contains(timezone)
      ).toArray()
    };
  },

  render() {
    let indexes = Immutable.List();

    return (
      <div className="AddTimezoneScreen__availableTimezones" ref="container">
        {this.state.list.map((timezone) => {
          const index = timezone.name[0];
          let data = null;

          if (indexes.indexOf(index) === -1) {
            indexes = indexes.push(index);
            data = {
              'data-index': index
            };
          }

          return (
            <TimezoneListRow key={'available.' + timezone.zone}
              className="AddTimezoneScreen__timezoneListRow"
              timezone={timezone}
              ts={this.props.ts}
              selected={false}
              data={data}/>
          );
        })}
      </div>
    );
  }

});


export default AvailableTimezonesList;
