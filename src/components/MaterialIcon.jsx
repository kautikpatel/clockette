'use strict';

import React from 'react';

import 'styles/MaterialIcon.scss';


const MaterialIcon = React.createClass({

  propTypes: {
    'src': React.PropTypes.string,
  },

  render() {
    return (
      <div className={this.props.className} dangerouslySetInnerHTML={{__html: this.props.icon}}/>
    );
  }

});

export default MaterialIcon;
