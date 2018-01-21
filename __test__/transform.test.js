'use strict';

const fs = require('fs');
const test = require(`${__dirname}/../lib/transform.js`);
const expect = require('chai').expect; 

describe('Grayscale Tests', function() {
  let j = 54, F = false, T = true;
  describe('Grayscale Validation', function() {
    it('should correctly grayscale colors', function(done) {
      test.grayTest(function(err, allData) {
        do {
          allData[j] > 255 || allData[j] < 0 ? T = true : undefined;
          j += 4;
        } while (j < 1078);
        expect(F).to.equal(false);
        done();
      });
    });
  });

  describe('Array Validation', function() {
    it('should determine if object is indeed an array', function(done) {
      test.grayArray(function(err, allData) {
        Array.isArray(allData) === true ? T : F; 
        expect(T).to.equal(true);
        done();
      });
    });
  });

  describe('Output Validation', function() {
    it('should correctly output a grayscale.bmp file', function(done) {
      test.correctOutput(function() {
        fs.readFile(`${__dirname}/../assets/grayscale.bmp`, function(err, allData) {
          expect(err).to.equal(null);
          expect(allData).to.have.length.above(0);
          done();
        });
      });
    });
  });
});