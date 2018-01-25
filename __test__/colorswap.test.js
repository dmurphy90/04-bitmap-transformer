'use strict';

const fs = require('fs');
const transform = require('../lib/transform.js');
const Bmp = require('../lib/bitmap.js');
const reader = require('../lib/reader.js');

let testBmp = new Bmp(fs.readFile('./assets/bitmap.bmp'));

describe('transform.js', () => {

  // describe('testing valid inputs');
  // test('should make sure the argument passed in is an array', () => {
  //   expect(transform.colorSwap({})).toBe(null);
  //   expect(transform.colorSwap('dog')).toBe(null);
  //   expect(transform.colorSwap(90)).toBe(null);
  // });

  describe('testing for files exsistence', () => {
    test('checking file directory for new image', () => {
      console.log('first test');
      fs.readFile(`${__dirname}/assets/bitmap.bmp`, (err, data) => {
        console.log('read file success');
        if(err) console.error(err);
        let bmp = new Bmp(fs.readFile('./assets/bitmap.bmp'));

        transform.colorSwap(bmp, (err, data) => {
          fs.writeFile(`${__dirname}/assets/colorswap.bmp`, data.allData, function(err) {
            if(err) console.error(err);
          });
        });
      });
      expect(fs.readFileSync(`${__dirname}/assets/colorswap.bmp`)).not.toBeNull();
    });
  });
});
