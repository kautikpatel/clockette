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
    this.interval = setInterval(() => {
      this.setState({
        ts: Date.now()
      });
    }, 1000 * 30);
  },

  componentWillUnmount() {
    clearInterval(this.interval);
  },

  render() {
    return (
      <RouteHandler ts={this.state.ts}/>
    );
  }

});

export default ClocketteApp;
