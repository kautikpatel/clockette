'use strict';

import _ from 'lodash';
import React from 'react';
import UserActions from 'actions/UserActionCreators';
import MaterialIcon from 'components/MaterialIcon';

import IconSearch from 'material-design-icons/action/svg/production/ic_search_48px.svg';
import IconClose from 'material-design-icons/navigation/svg/production/ic_close_48px.svg';

import 'styles/Searchbar.scss';


const Searchbar = React.createClass({

  getInitialState() {
    return {
      searching: false,
      empty: true
    };
  },

  startSearching(e) {
    this.setState(
      { searching: true },
      this.focus
    );
  },

  focus() {
    this.refs.textInput.getDOMNode().focus();
  },

  onTextInputChange(e) {
    const term = _.trim(e.target.value);
    this.setState(
      { empty: term.length ? false : true },
      function() {
        UserActions.searchByName(term);
      }
    );
  },

  render() {
    if (!this.state.searching) {
      return (
        <div className="Searchbar">
          <MaterialIcon icon={IconSearch} className="IconSearch" onClick={this.startSearching}/>
        </div>
      );
    }
    else {
      return (
        <div className="Searchbar">
          <input type="text"
            ref="textInput"
            className="textInput"
            placeholder="Search..."
            onChange={this.onTextInputChange}/>

          <MaterialIcon icon={IconClose} className="IconClose" data-show={!this.state.empty ? 1 : 0}/>
        </div>
      );
    }

  }
});

export default Searchbar;
