var assert = require('assert');
var methods = require('../');

describe('segmentio-api-methods', function () {
  it('should export all the methods', function () {
    assert(methods.length === 6);
  });
});

