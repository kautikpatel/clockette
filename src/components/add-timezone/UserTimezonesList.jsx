'use strict';

import React from 'react/addons';
import { Link } from 'react-router';

import TimezoneListRow from './TimezoneListRow';

import UserStore from 'stores/UserStore';

const { PureRenderMixin } = React.addons;


const UserTimezonesList = React.createClass({

  mixins: [PureRenderMixin],

  getInitialState() {
    return {
      list: UserStore.data,
    };
  },

  render() {
    const list = this.state.list.map((timezone) => {
      return (
        <TimezoneListRow key={'user.' + timezone.zone}
          className="AddTimezoneScreen__timezoneListRow"
          timezone={timezone}
          ts={this.props.ts}
          selected={true}/>
      );
    });

    const label = list.size ? <h3>Selected cities</h3> : null;
    return (
      <div className="AddTimezoneScreen__userTimezones">
        {label}
        {list}
      </div>
    );
  }

});


export default UserTimezonesList;
