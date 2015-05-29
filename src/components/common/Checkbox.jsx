'use strict';

import React from 'react';

import 'styles/Checkbox.scss';

const Checkbox = React.createClass({

  propTypes: {
    selected: React.PropTypes.bool
  },

  getDefaultProps() {
    return {
      selected: false
    };
  },

  render() {
    const classes = [
      'Checkbox',
      this.props.selected ? 'selected': null,
    ].join(' ');

    return (
      <div className={this.props.className}>
        <span className={classes}>✔</span>
      </div>
    );
  }

});

export default Checkbox;
