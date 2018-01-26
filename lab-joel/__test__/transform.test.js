'use strict';

const transform = require('../lib/transform.js');
const bmp = require('../lib/bitmap.js');
const fs = require('fs');
require('jest');
let testBmp = new bmp(fs.readFile('../assets/bitmap.bmp'));
let flippedBmp = new bmp(fs.readFile('../assets/flipmap.bmp'));
let shuffledBmp = new bmp(fs.readFile('../assets/shuffle.bmp'));

describe('Transform Module', () => {
  describe('#flipImage', () => {
    it('should make sure an argument is passed in', () => {
      expect(transform.flipImage()).toBe(null);
    });
    it('should make sure the argument passed in is an object', () => {
      expect(transform.flipImage([])).toBe(null);
      expect(transform.flipImage('dog')).toBe(null);
      expect(transform.flipImage(90)).toBe(null);
    });
    it('should make sure the output key/value is not the same as the input', () => {
      expect(testBmp).not.toEqual(flippedBmp);
    });
  });
  describe('#shuffle', () => {
    it('should make sure an argument is passed in', () => {
      expect(transform.shuffle('asdfasdf')).toBe(null);
    });
    it('should make sure the argument passed in is an object', () => {
      expect(transform.shuffle([])).toBe(null);
      expect(transform.shuffle('dog')).toBe(null);
      expect(transform.shuffle(90)).toBe(null);
    });
    it('should make sure the output key/value is not the same as the input', () => {
      expect(testBmp).not.toEqual(shuffledBmp);
    });
  });
});