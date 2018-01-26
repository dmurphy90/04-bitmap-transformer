'use strict';

const reader = require('../lib/reader.js');
const fs = require('fs');
require('jest');
describe('reader.js', () => {

  describe('valid inputs', () => {
    test('should return true verifing the existance of the invertColor transform', () => {
      expect(fs.readFileSync(`${__dirname}/testassets/invertColorMapTest.bmp`)).toBeTruthy();
    });

    test('should return true verifing the existance of the flipped transform', () => {
      expect(fs.readFileSync(`${__dirname}/testassets/flippedMapTest.bmp`)).toBeTruthy();
    });


    test('should return true verifing the existance of the shuffle transform', () => {
      expect(fs.readFileSync(`${__dirname}/testassets/shuffleMapTest.bmp`)).toBeTruthy();
    });


    test('should return true verifing the existance of the invertColor transform', () => {
      expect(fs.readFileSync(`${__dirname}/testassets/invertColorMapTest.bmp`)).toBeTruthy();
    });
  });
});
