'use strict';

import React from 'react';
import { Link } from 'react-router';
import Moment from 'moment-timezone';
import MaterialIcon from 'components/MaterialIcon';
import Timezone from 'components/Timezone';
import UserStore from 'stores/UserStore';

import IconLanguage from 'material-design-icons/action/svg/production/ic_language_48px.svg';

import 'styles/HomeScreen.scss';


const HomeScreen = React.createClass({

  render() {
    const now = new Date(this.props.ts);

    const userTimezones = UserStore.data.map((timezone) => {
      const timezoneMoment = Moment(now).tz(timezone.zone);
      let timezoneDay;

      if (timezoneMoment.day() !== now.getDay()) {
        timezoneDay = (
          <span className="HomeScreen__userTimezone__day">
            / {timezoneMoment.format('ddd')}
          </span>
        );
      }

      return (
        <div key={'user.' + timezone.zone} className="HomeScreen__userTimezone">
          <span className="HomeScreen__userTimezone__city">
            {timezone.name} {timezoneDay}
          </span>

          <span className="HomeScreen__userTimezone__time">
            {timezoneMoment.format('h:mm')}
          </span>
          <span className="HomeScreen__userTimezone__ampm">
            {timezoneMoment.format('A')}
          </span>
        </div>
      );
    });

    return (
      <div className="HomeScreen">

        <div className="HomeScreen__top">
          <Timezone className="HomeScreen__clock" ts={+now}>
            <span className="HomeScreen__clock-time">h:mm</span>
            <span className="HomeScreen__clock-ampm">A</span>
          </Timezone>

          <Timezone className="HomeScreen__date" ts={+now}>
            <span>ddd, MMMM D</span>
          </Timezone>
        </div>

        <div className="hr"></div>

        <div className="HomeScreen__bottom">
          {userTimezones}
        </div>

        <Link to="/timezones">
          <MaterialIcon icon={IconLanguage} className="HomeScreen__addTimezoneButton"/>
        </Link>

      </div>
    );
  }

});

export default HomeScreen;
