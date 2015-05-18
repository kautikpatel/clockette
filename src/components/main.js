'use strict';

var ClocketteApp = require('./ClocketteApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var HomeScreen = require('./HomeScreen');
var AddTimezoneScreen = require('./AddTimezoneScreen');

var Routes = (
  <Route handler={ClocketteApp}>
    <Route name="/" handler={HomeScreen}/>
    <Route name="/timezones" handler={AddTimezoneScreen}/>
  </Route>
);

Router.run(Routes, function(Handler) {
  React.render(<Handler/>, document.getElementById('ClocketteApp'));
});
