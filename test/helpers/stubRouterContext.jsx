'use strict';

import React from 'react/addons';
import _ from 'lodash';

/**
 * @see https://github.com/rackt/react-router/blob/master/docs/guides/testing.md
 */
const stubRouterContext = (Component, props, stubs) => {
  function RouterStub() {}

  _.assign(RouterStub, {
    makePath() {},
    makeHref() {},
    transitionTo() {},
    replaceWith() {},
    goBack() {},
    getCurrentPath() {},
    getCurrentRoutes() {},
    getCurrentPathname() {},
    getCurrentParams() {},
    getCurrentQuery() {},
    isActive() {},
    getRouteAtDepth() {},
    setRouteComponentAtDepth() {}
  }, stubs);

  return React.createClass({
    childContextTypes: {
      router: React.PropTypes.func,
      routeDepth: React.PropTypes.number
    },

    getChildContext() {
      return {
        router: RouterStub,
        routeDepth: 0
      };
    },

    render() {
      return (<Component {...props} />);
    }
  });
};

module.exports = stubRouterContext;
