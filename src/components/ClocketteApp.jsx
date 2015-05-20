'use strict';

import React from 'react';
import { RouteHandler } from 'react-router';

import 'normalize.css';
import 'styles/main.css';


const ClocketteApp = React.createClass({

  getInitialState() {
    this.interval = null;

    return {
      ts: Date.now()
    };
  },

  componentDidMount() {
    let adjustInterval = setInterval(() => {
      const now = new Date();
      if (now.getSeconds() === 0) {
        clearInterval(adjustInterval);
        this.updateTS();
        this.interval = setInterval(this.updateTS, 1000 * 60);
      }
    }, 1000);
  },

  componentWillUnmount() {
    clearInterval(this.interval);
  },

  updateTS() {
    this.setState({ ts: Date.now() });
  },

  render() {
    return (
      <RouteHandler ts={this.state.ts}/>
    );
  }

});

export default ClocketteApp;
