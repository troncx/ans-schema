/*global describe:true it:true */

var should = require('should'),
    dir = require('node-dir'),
    path = require('path'),
    Ajv = require('ajv'),
    _ = require('lodash'),
    ans = require('../lib/ans');

var validate = function(json_path, done_callback) {
    ans.getValidatorForVersion('0.5.9', function(err, validator) {
      var errors = validator.validate(require(json_path));
      if(errors) {
        console.warn('-------Validation errors--------');
        console.warn(errors);
        console.warn('--------------------------------');
      }
      errors.length.should.eql(0);
      done_callback();
    });
}

describe("Tronc schemas", function() {

  it("Story schema should not have any errors", function(done_callback) {
    validate('./fixtures/tronc/story.json', done_callback);
  });

  it("Liveblog schema should not have any errors", function(done_callback) {
    validate('./fixtures/tronc/liveblog.json', done_callback);
  });

});
