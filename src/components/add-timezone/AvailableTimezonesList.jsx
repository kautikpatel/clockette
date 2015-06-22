'use strict';

import React from 'react/addons';
import Immutable from 'immutable';
import _ from 'lodash';

import TimezoneListRow from './TimezoneListRow';

import TimezoneStore from 'stores/TimezoneStore';
import UserStore from 'stores/UserStore';

const { PureRenderMixin } = React.addons;


const AvailableTimezonesList = React.createClass({

  mixins: [PureRenderMixin],

  getInitialState() {
    this.list = TimezoneStore.getSeq().filter(
      (timezone) => !UserStore.data.contains(timezone)
    ).cacheResult();
    this.isBuilding = false;

    return {
      elements: this.buildElements(0, 20),
    };
  },

  componentDidMount() {
    const _window = window;
    const containerNode = this.refs.container.getDOMNode();
    const containerRect = containerNode.getBoundingClientRect();
    const firstChildNode = containerNode.firstChild;
    const firstChildRect = firstChildNode.getBoundingClientRect();

    const pageHeight = (firstChildRect.height) * 10;

    this.onScroll = _.throttle((e) => {
      if (this.isBuilding === true) {
        return;
      }
      if (this.state.elements.length >= this.list.size) {
        document.removeEventListener('scroll', this.onScroll);
        return;
      }

      let page = parseInt((this.state.elements.length / 20) - 1, 10);
      let trigger = _window.scrollY > ((page * pageHeight) + containerRect.top);
      if (trigger) {
        this.isBuilding = true;
        this.setState({
          elements: this.buildElements(0, this.state.elements.length + 20),
        });
      }
    }, 200);
    document.addEventListener('scroll', this.onScroll);
  },

  componentDidUpdate() {
    this.isBuilding = false;
  },

  componentWillUnmount() {
    document.removeEventListener('scroll', this.onScroll);
  },

  renderElement(timezone) {
    return (
      <TimezoneListRow key={'available.' + timezone.zone}
        className="AddTimezoneScreen__timezoneListRow"
        timezone={timezone}
        ts={this.props.ts}
        selected={false}/>
    );
  },

  buildElements(start, end) {
    return this.list.slice(start, end).map(this.renderElement).toArray();
  },

  render() {
    let indexes = Immutable.List();

    return (
      <div className="AddTimezoneScreen__availableTimezones" ref="container">
        { this.state.elements }
      </div>
    );
  }

});


export default AvailableTimezonesList;
