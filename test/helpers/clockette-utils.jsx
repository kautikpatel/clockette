'use strict';

import React from 'react/addons';
const ReactTestUtils = React.addons.TestUtils;


class RenderedComponent {
  constructor(component) {
    this.component = component;
    this.renderedComponent = ReactTestUtils.renderIntoDocument(component);
  }

  /*
   * Finds a node in component's children
   */
  find(selector) {
    let findClassName = selector.match(/\.([a-zA-Z0-9_-]+)/);
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

const ClocketteUtils = (component) => {
  return new RenderedComponent(component);
};

export default ClocketteUtils;
