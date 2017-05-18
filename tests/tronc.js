/*global describe:true it:true */

var should = require('should'),
    dir = require('node-dir'),
    path = require('path'),
    Ajv = require('ajv'),
    _ = require('lodash'),
    ans = require('../lib/ans');


describe("Tronc schemas", function() {

  it("Story schema should not have any errors", function(done) {
      ans.getValidatorForVersion('0.5.8', function(err, validator) {
        var errors = validator.validate(require('./fixtures/tronc/story.json'));
        _.each(errors, (e)=> {
          console.warn(e);
        });
        errors.length.should.eql(-1);
        done();
      });

  });
});
