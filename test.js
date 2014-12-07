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
});