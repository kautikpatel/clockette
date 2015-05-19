'use strict';

import React from 'react/addons';
import { $ } from 'test/helpers/clockette-utils.jsx';


describe('Timezone', function() {
  let Timezone, expected, now;

  beforeEach(function() {
    Timezone = require('components/Timezone.jsx');
    now = new Date();

    expected = (function(now) {
      let hours = now.getHours(),
        minutes = now.getMinutes(),
        h, mm, A;

      h = (hours === 0) ? 12 : (hours > 12) ? hours - 12 : hours;
      mm = (minutes < 10) ? '0' + minutes : minutes;
      A = (hours < 12 || hours === 24) ? 'AM' : 'PM';

      return `${h}:${mm} ${A}`;
    })(now);
  });


  it('should output a formatted timezone without arguments', function() {
    let $component = $(
      <Timezone>
        <span>h:mm A</span>
      </Timezone>
    );

    expect($component.find('span').innerText).toBe(expected);
  });


  it('should output a formatted timezone with custom zone', function() {
    let $component = $(
      <Timezone zone="America/Los_Angeles">
        <span>h:mm A</span>
      </Timezone>
    );

    expect($component.find('span').innerText).toBe(expected);
  });


  it('should output a formatted timezone with custom offset', function() {
    let $component = $(
      <Timezone offset="420">
        <span>h:mm A</span>
      </Timezone>
    );

    expect($component.find('span').innerText).toBe(expected);
  });


  it('should output a formatted timezone with custom timestamp and zone', function() {
    let $component = $(
      <Timezone ts="1430741520000" zone="America/Los_Angeles">
        <span>h:mm A</span>
      </Timezone>
    );

    expect($component.find('span').innerText).toBe('5:12 AM');
  });


  it('should output a formatted timezone with custom timestamp and offset', function() {
    let $component = $(
      <Timezone ts="1430741520000" offset="420">
        <span>h:mm A</span>
      </Timezone>
    );

    expect($component.find('span').innerText).toBe('5:12 AM');
  });


  it('should output a formatted timezone in a nested node', function() {
    let $component = $(
      <Timezone>
        <div>
          <span>h:mm A</span>
          <span>YYYY</span>
        </div>
      </Timezone>
    );

    expect($component.find('span')[0].innerText).toBe(expected);
    expect($component.find('span')[1].innerText).toBe(String(now.getFullYear()));
  });

});
