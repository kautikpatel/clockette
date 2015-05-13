'use strict';

import React from 'react/addons';
import $ from 'test/helpers/clockette-utils.jsx';


describe('Timezone', function() {
  var Timezone, expected;

  beforeEach(function() {
    Timezone = require('components/Timezone.jsx');

    expected = (function(now) {
      var hours = now.getHours(),
        minutes = now.getMinutes(),
        h, mm, A;

      h = hours > 12 ? (hours - 12) : hours;
      mm = minutes < 10 ? ('0' + minutes) : minutes;
      A = (hours < 12 || hours === 24) ? 'AM' : 'PM';

      return `${h}:${mm} ${A}`;
    })(new Date());
  });


  it('should output a formatted timezone with custom zone', function() {
    var component = $(
      <Timezone zone="America/Los_Angeles">
        <span>h:mm A</span>
      </Timezone>
    );

    expect(component.find('span').innerText).toBe(expected);
  });


  it('should output a formatted timezone with custom offset', function() {
    var component = $(
      <Timezone offset="420">
        <span>h:mm A</span>
      </Timezone>
    );

    expect(component.find('span').innerText).toBe(expected);
  });


  it('should output a formatted timezone with custom timestamp and zone', function() {
    var component = $(
      <Timezone ts="1431554816327" zone="America/Los_Angeles">
        <span>h:mm A</span>
      </Timezone>
    );

    expect(component.find('span').innerText).toBe('3:06 PM');
  });


  it('should output a formatted timezone with custom timestamp and offset', function() {
    var component = $(
      <Timezone ts="1431554816327" offset="420">
        <span>h:mm A</span>
      </Timezone>
    );

    expect(component.find('span').innerText).toBe('3:06 PM');
  });

});
