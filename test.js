var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('current timestamp:', now.unix());

var timestamp = 1482758258;

var currentMoment = moment.unix(timestamp);
console.log('current moment:', currentMoment.fromNow());
console.log('current moment:', currentMoment.format('MMMM Do, Y @ HH:MM'));