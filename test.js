/**
 * o-clock <https://github.com/jonschlinkert/o-clock>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

var should = require('should');
var moment = require('moment');
var oclock = require('./');

describe('oclock()', function () {
  it('should return current time.', function () {
    oclock().should.equal(moment().format('h:mm A'));
    oclock(new Date()).should.equal(moment().format('h:mm A'));
  });

  it('should display "12:00 AM" for midnight.', function () {
    var date = new Date(2016, 10, 14)
    oclock(date).should.equal(moment(date).format('h:mm A'));
  });

  it('should display 12:00 PM for noon.', function () {
    var date = new Date(2016, 10, 14, 12)
    oclock(date).should.equal(moment(date).format('h:mm A'));
  });
});
