'use strict';

import ClocketteApp from './ClocketteApp';
import React from 'react';
import Router from 'react-router';
import HomeScreen from './home/HomeScreen';
import AddTimezoneScreen from './add-timezone/AddTimezoneScreen';

const Route = Router.Route;

const Routes = (
  <Route handler={ClocketteApp}>
    <Route name="/" handler={HomeScreen}/>
    <Route name="/timezones" handler={AddTimezoneScreen}/>
  </Route>
);

Router.run(Routes, function(Handler) {
  React.render(<Handler/>, document.getElementById('ClocketteApp'));
});
