'use strict';

import Reflux from 'reflux';


const UserActionCreators = Reflux.createActions([
  'add',
  'remove',
  'searchByName',
]);

export default UserActionCreators;
