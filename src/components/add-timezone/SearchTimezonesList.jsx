'use strict';

import React from 'react/addons';

import TimezoneListRow from './TimezoneListRow';

import UserStore from 'stores/UserStore';

import IconBack from 'material-design-icons/navigation/svg/production/ic_arrow_back_48px.svg';

const { PureRenderMixin, Perf } = React.addons;


const SearchTimezonesList = React.createClass({

  mixins: [PureRenderMixin],

  render() {
    const list = this.props.list.map((timezone) => {
      const selected = UserStore.data.contains(timezone);

      return (
        <TimezoneListRow key={'searched.' + timezone.zone}
          className="AddTimezoneScreen__timezoneListRow"
          timezone={timezone}
          ts={this.props.ts}
          selected={selected}/>
      );
    });

    return (
      <div className="AddTimezoneScreen__searchingTimezones">
        {list}
      </div>
    );
  }

});


export default SearchTimezonesList;
