'use strict';

import React from 'react';
import Timezone from 'components/Timezone';
import ButtonLanguage from 'components/ButtonLanguage';

import 'styles/HomeScreen.scss';


const HomeScreen = React.createClass({

  render() {
    return (
      <div className="HomeScreen">

        <div className="HomeScreen__top">
          <Timezone className="HomeScreen__clock" ts={this.props.ts}>
            <span className="HomeScreen__clock-hour">h:mm</span>
            <span className="HomeScreen__clock-ampm">A</span>
          </Timezone>

          <Timezone className="HomeScreen__date" ts={this.props.ts}>
            <span>ddd, MMMM D</span>
          </Timezone>
        </div>

        <div className="hr"></div>

        <div className="HomeScreen__bottom">
        </div>

        <ButtonLanguage className="HomeScreen__addTimezoneButton"/>

      </div>
    );
  }

});

export default HomeScreen;
