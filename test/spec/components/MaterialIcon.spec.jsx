'use strict';

import React from 'react/addons';
import { $ } from 'test/helpers/clockette-utils.jsx';
import MaterialIcon from 'components/MaterialIcon.jsx';
import IconLanguage from 'material-design-icons/action/svg/production/ic_language_48px.svg';

describe('MaterialIcon', function () {
  var $component;

  beforeEach(function () {
    $component = $(<MaterialIcon icon={IconLanguage}/>);
  });

  it('should create a new instance of MaterialIcon', function () {
    expect($component).toBeDefined();
  });
});
