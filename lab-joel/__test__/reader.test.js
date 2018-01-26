'use strict';

const reader = require('../lib/reader.js');
const fs = require('fs');
require('jest');

let startPath = `${__dirname}/../assets/bitmap.bmp`;
let newPath = `${__dirname}/../assets/new.bmp`;


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


    test('should return true verifing the existance of the blackWhite transform', () => {
      expect(fs.readFileSync(`${__dirname}/testassets/blackWhiteMapTest.bmp`)).toBeTruthy();
    });
  });

  describe('invalid inputs', () => {

    test('should return null for invalid startPath inputs', () => {
      expect(reader.readWrite( newPath, 'flipImage')).toBeNull;
    });
    test('should return null for invalid newPath inputs', () => {
      expect(reader.readWrite(startPath, 'flipImage')).toBeNull;
    });

  });

  describe('Successful transforms', () => {
    test('should write a new invert file and return true before being rewritten', () => {
      expect(reader.readWrite(startPath, newPath, 'invertColor')).toEqual('IMAGE TRANSFORMED');
    });

    test('should write a new flip file and return true before being rewritten', () => {
      expect(reader.readWrite(startPath, newPath, 'flipImage')).toEqual('IMAGE TRANSFORMED');
    });

    test('should write a new shuffle file and return true before being rewritten', () => {
      expect(reader.readWrite(startPath, newPath, 'shufflePixels')).toEqual('IMAGE TRANSFORMED');
    });

    test('should write a new black and white file and return true before being rewritten', () => {
      expect(reader.readWrite(startPath, newPath, 'blackAndWhite')).toEqual('IMAGE TRANSFORMED');
    });
  });

  describe('Unsuccessful transforms', () => {
    test('should not write a new file and return null', () => {
      expect(reader.readWrite(startPath, newPath, 'invertColo')).toEqual('invalid transform method try: flipImage : invertColor : shufflePixels : blackAndWhite');
    });

    test('should not write a new file and return Error', () => {
      expect(reader.readWrite(startPath, 1234, 'invertColor')).toEqual('===ERROR===Not and instance of bmp constructor ===ERROR===');
    });
  });

});
