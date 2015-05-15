'use strict';

describe('UserActionCreators', function() {
  let action;

  beforeEach(function() {
    action = require('actions/UserActionCreators.jsx');
  });

  it('should be defined', function() {
    expect(action).toBeDefined();
  });
});
