'use strict';

const reader = require('../lib/reader.js');
const fs = require('fs');
require('jest');

let first = `${__dirname}/../testassets/bitmap.bmp`;
let second = `${__dirname}/../testassets/invertColorMap.bmp`;
reader.readWrite(first, second, 'invertColor');

describe('reader.js', () => {

  describe('valid inputs', () => {
    test('should make a new inverted test image', () => {
      console.log(`===================${__dirname}/../testassets/bitmap.bmp================`);
      let first = `${__dirname}/../testassets/bitmap.bmp`;
      let second = `${__dirname}/../testassets/invertColorMap.bmp`;
      reader.readWrite(first, second, 'invertColor');
      expect(fs.readFileSync(`${__dirname}/../testassets/invertColorMap.bmp`)).toBeTruthy();
    });
  });
});
