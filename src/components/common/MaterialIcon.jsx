'use strict';

import _ from 'lodash';
import React from 'react';

import 'styles/MaterialIcon.scss';


const MaterialIcon = React.createClass({

  propTypes: {
    'icon': React.PropTypes.string.isRequired,
  },

  render() {
    const classes = ['MaterialIcon', this.props.className];
    const props = _.omit(this.props, ['icon', 'className']);

    return (
      <div {...props} className={classes.join(' ').trim()} dangerouslySetInnerHTML={{__html: this.props.icon}}/>
    );
  }

});

export default MaterialIcon;
