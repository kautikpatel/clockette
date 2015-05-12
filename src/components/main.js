'use strict';

var ClocketteApp = require('./ClocketteApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var Routes = (
  <Route handler={ClocketteApp}>
    <Route name="/" handler={ClocketteApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('ClocketteApp'));
});
