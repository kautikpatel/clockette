'use strict';

var ClocketteApp = require('./ClocketteApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var HomeScreen = require('./HomeScreen');

var Routes = (
  <Route handler={ClocketteApp}>
    <Route name="/" handler={HomeScreen}/>
  </Route>
);

Router.run(Routes, function(Handler) {
  React.render(<Handler/>, document.getElementById('ClocketteApp'));
});
