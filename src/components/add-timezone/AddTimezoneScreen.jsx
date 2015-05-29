'use strict';

import _ from 'lodash';
import React from 'react/addons';
import Reflux from 'reflux';
import { Link } from 'react-router';

import MaterialIcon from 'components/common/MaterialIcon';
import Searchbar from './Searchbar';
import AvailableTimezonesList from './AvailableTimezonesList';
import UserTimezonesList from './UserTimezonesList';
import SearchTimezonesList from './SearchTimezonesList';

import TimezoneStore from 'stores/TimezoneStore';

import IconBack from 'material-design-icons/navigation/svg/production/ic_arrow_back_48px.svg';

import 'styles/AddTimezoneScreen.scss';

const { PureRenderMixin, Perf } = React.addons;


const AddTimezoneScreen = React.createClass({

  mixins: [
    PureRenderMixin,
    Reflux.listenTo(TimezoneStore, 'onTimezoneStoreUpdate')
  ],

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
          <SearchTimezonesList ts={this.props.ts} list={this.state.searchResults}/>
        </div>
      );
    }
    else {
      content = (
        <div className="AddTimezoneScreen__content--default">
          <UserTimezonesList ts={this.props.ts}/>
          <AvailableTimezonesList ts={this.props.ts}/>
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
