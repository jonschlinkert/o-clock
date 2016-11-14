/*!
 * twelve-hours <https://github.com/jonschlinkert/twelve-hours>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function oclock(date) {
  date = date instanceof Date
    ? date : new Date();
  return hours(date);
};

function hours(date) {
  var hrs = date.getHours();
  var min = minutes(date);

  if (hrs === 0) return 12 + min + ' AM';

  if (hrs === 12) return 12 + min + ' PM';

  return hrs >= 12
    ? hrs - 12 + min + ' PM'
    : hrs + min + ' AM';
}

function minutes(date) {
  var min = date.getMinutes();
  var res = min < 10
    ? '0' + min
    : min;
  return ':'+ res;
}
