'use strict';

const transform = require('../lib/transform.js');
require('jest');

describe('Transform Module', () => {
  describe('#flipImage', () => {
    it('should make sure an argument is passed in', () => {
      expect(transform.flipImage()).toBe(null);
    });
    it('should make sure the argument passed in is an array', () => {
      expect(transform.flipImage({})).toBe(null);
      expect(transform.flipImage('dog')).toBe(null);
      expect(transform.flipImage(90)).toBe(null);
    });
    it('should make sure the output array is not the same as the input', () => {
      expect(transform.flipImage({pixelArray: [1, 5, 7]})).not.toBe({pixelArray: [1, 5, 7]});
    });
  });
  describe('#shuffle', () => {
    it('should make sure an argument is passed in', () => {
      expect(transform.shuffle()).toBe(null);
    });
    it('should make sure the argument passed in is an array', () => {
      expect(transform.shuffle({})).toBe(null);
      expect(transform.shuffle('dog')).toBe(null);
      expect(transform.shuffle(90)).toBe(null);
    });
    it('should make sure the output array is not the same as the input', () => {
      expect(transform.flipImage({pixelArray: [2, 4, 6, 8, 10]})).not.toBe({pixelArray: [2, 4, 6, 8, 10]});
    });
  });
});