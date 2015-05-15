var Moment = require('moment-timezone');
var metas = require('moment-timezone/data/meta/latest.json');

var meta_zones = Object.keys(metas.zones);
var zones = Moment.tz.names();
var offsets = zones
  .filter(function(i) {
    return meta_zones.indexOf(i) !== -1;
  })
  .map(function(i) {
    return Moment.tz.zone(i).offsets;
  })
  .reduce(function(a, b) {
    return a.concat(b);
  }, [])
  .filter(function(v, i, me) {
    return me.indexOf(v) === i;
  })
  .sort(function(a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });

console.log(offsets);
