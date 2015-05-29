'use strict';

import _ from 'lodash';
import React from 'react/addons';
import UserActions from 'actions/UserActionCreators';
import Checkbox from 'components/common/Checkbox';
import Timezone from 'components/common/Timezone';

import 'styles/TimezoneListRow.scss';

const PureRenderMixin = React.addons.PureRenderMixin;


const TimezoneListRow = React.createClass({

  mixins: [PureRenderMixin],

  propTypes: {
    'timezone': React.PropTypes.object,
    'ts': React.PropTypes.number,
    'selected': React.PropTypes.bool,
  },

  getInitialState() {
    return {
      selected: !!this.props.selected
    };
  },

  toggle() {
    const selected = !this.state.selected;

    this.setState({ selected }, () => {
      if (selected) {
        UserActions.add(this.props.timezone);
      }
      else {
        UserActions.remove(this.props.timezone);
      }
    });
  },

  render() {
    const { timezone, ts, data } = this.props;

    const classes = [
      'TimezoneListRow',
      this.props.className ? this.props.className : null
    ].join(' ');

    return (
      <div className={classes} {...data} onClick={this.toggle}>
        <Checkbox selected={this.state.selected} className="TimezoneListRow__checkbox"/>

        <span className="TimezoneListRow__city">{timezone.name}</span>

        <Timezone offset={timezone.offset} ts={ts} className="TimezoneListRow__time">
          <span>h:mm A</span>
        </Timezone>
      </div>
    );
  }

});

export default TimezoneListRow;
