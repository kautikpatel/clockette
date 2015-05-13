'use strict';

import React from 'react';
import _ from 'lodash';
import Moment from 'moment-timezone';

import 'styles/Timezone.scss';

const Timezone = React.createClass({

  render() {
    let { children, zone, ts, offset } = this.props;

    if (!_.isArray(children)) {
      children = [children];
    }

    if (!zone) {

    }

    let content = children.map((child, index) => {
      let children, key;

      if (!this.props.zone) {
        let moment = Moment();
        let ts = +new Date();
        children = moment.format(child.props.children);
        key = 'tz.time.default' + ts + '.' + index;
      }
      else {
        children = Moment.tz(this.props.zone).format(child.props.children);
        key = 'tz.time.' + this.props.zone + '.' + index;
      }

      return React.cloneElement(
        child,
        { key: key },
        children
      );
    });

    return (
      <div {...this.props}>{content}</div>
    );
  }
});

export default Timezone;
