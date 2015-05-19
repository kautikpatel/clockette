'use strict';

import React from 'react/addons';
const ReactTestUtils = React.addons.TestUtils;

class RenderedComponent {

  constructor(component) {
    this.component = component;
    this.renderedComponent = ReactTestUtils.renderIntoDocument(this.component);
  }

  /**
   * Finds a node in component's children
   */
  find(selector) {
    const findClassName = selector.match(/\.([a-zA-Z0-9_-]+)/);
    let results;

    // Find by className
    if (findClassName !== null) {
      results = ReactTestUtils.scryRenderedDOMComponentsWithClass(
        this.renderedComponent,
        findClassName[1]
      ).map(this.getDOMNode);
    }

    // Else find by tagName
    else {
      results = ReactTestUtils.scryRenderedDOMComponentsWithTag(
        this.renderedComponent,
        selector
      ).map(this.getDOMNode);
    }

    return results.length === 1 ? results[0] : results;
  }

  getDOMNode(reactElement) {
    return reactElement.getDOMNode();
  }

}

const ClocketteUtils = {
  $: function $(component) {
    return new RenderedComponent(component);
  },

  spyOnActionHandler: function spyOnActionHandler(options) {
    const { store, method, action } = options;

    action.emitter.removeAllListeners();
    spyOn(store, method);
    action.listen(store[method]);

    return {
      store,
      method,
      action,
      callback: store[method]
    };
  },
};

export default ClocketteUtils;
