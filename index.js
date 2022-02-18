const geo = require('./geo.json');
const incomings = require('./incomings.json');
const _ = require('lodash');

const districts = _.reduce(
  geo, (a, b) => {
    console.log(a);
    a[b.code] = b.caption;
    return a;
  }, {}
);
const regions = _.reduce(
  geo, (a, b) => {
    _.forEach(b.regions, (value) => a[value.code] = value.caption);
    return a;
  }, {}
);
const regions2020 = incomings['2020'].regions;
const report2020 = _.reduce(
  regions2020, (a, b) => {
    a[regions[b.code]] = b.value;
    return a;
  },{}
);
//console.log(regions);
//console.log(districts);
//console.log(report2020);
