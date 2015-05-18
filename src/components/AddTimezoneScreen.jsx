'use strict';

import _ from 'lodash';
import React from 'react';
import Reflux from 'reflux';
import Immutable from 'immutable';
import { Link } from 'react-router';
import UserActions from 'actions/UserActionCreators';
import MaterialIcon from 'components/MaterialIcon';
import Searchbar from 'components/Searchbar';
import Timezone from 'components/Timezone';
import TimezoneListRow from 'components/TimezoneListRow';
import TimezoneStore from 'stores/TimezoneStore';
import UserStore from 'stores/UserStore';

import IconBack from 'material-design-icons/navigation/svg/production/ic_arrow_back_48px.svg';

import 'styles/AddTimezoneScreen.scss';


const UserTimezones = React.createClass({

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


const AvailableTimezones = React.createClass({

  getInitialState() {
    return {
      list: TimezoneStore.data,
    };
  },

  render() {
    let indexes = Immutable.List();

    const list = this.state.list
      .filter((timezone) => !UserStore.data.contains(timezone))
      .map((timezone) => {
        const index = timezone.name[0];
        let data;

        if (!indexes.contains(index)) {
          data = {
            'data-index': index
          };
          indexes = indexes.push(index);
        }

        return (
          <TimezoneListRow key={'available.' + timezone.zone}
            className="AddTimezoneScreen__timezoneListRow"
            timezone={timezone}
            ts={this.props.ts}
            selected={false}
            data={data}/>
        );
      });

    return (
      <div className="AddTimezoneScreen__availableTimezones">
        {list}
      </div>
    );
  }

});


const SearchingTimezones = React.createClass({

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


const AddTimezoneScreen = React.createClass({

  mixins: [Reflux.listenTo(TimezoneStore, 'onTimezoneStoreUpdate')],

  getInitialState() {
    return {
      searching: false,
      searchResults: null,
    };
  },

  onTimezoneStoreUpdate(action, data) {
    if (action === 'searchByName') {
      this.setState({
        searching: !!data.query.length,
        searchResults: data.results,
      });
    }
  },

  render() {
    let content;

    if (this.state.searching) {
      content = (
        <div className="AddTimezoneScreen__content--searching">
          <SearchingTimezones ts={this.props.ts} list={this.state.searchResults}/>
        </div>
      );
    }
    else {
      content = (
        <div className="AddTimezoneScreen__content--default">
          <UserTimezones ts={this.props.ts}/>
          <AvailableTimezones ts={this.props.ts}/>
        </div>
      );
    }

    return (
      <div className="AddTimezoneScreen">

        <div className="AddTimezoneScreen__topBar">
          <Link to="/">
            <MaterialIcon icon={IconBack} className="BackButton"/>
          </Link>
          <Searchbar/>
        </div>

        {content}

      </div>
    );
  }
});

export default AddTimezoneScreen;
