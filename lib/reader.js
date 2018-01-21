'use strict';

const fs = require('fs');
const Bmp = require('./bitmap.js');
const transform = require('./transform.js');
const reader = module.exports = {};


reader.readWrite = function() {
  fs.readFile(`${__dirname}/../assets/bitmap.bmp`, (err, data) => {
    if(err) console.error(err);
    let bmp = new Bmp(data);
    console.log('new map pixel count:', bmp.pixelArray.length);

    transform.flipImage(bmp, (err, data) => {
      fs.writeFile(`${__dirname}/../assets/flipmap.bmp`, data.allData, function(err) {
        if(err) console.error(err);
      });
    });
  });

  fs.readFile(`${__dirname}/../assets/bitmap.bmp`, (err, data) => {
    if(err) console.error(err);
    let bmp = new Bmp(data);
    console.log('new map pixel count:', bmp.pixelArray.length);

    transform.colorSwap(bmp, (err, data) => {
      fs.writeFile(`${__dirname}/../assets/colorswap.bmp`, data.allData, function(err) {
        if(err) console.error(err);
      });
    });
  });

  fs.readFile(`${__dirname}/../assets/bitmap.bmp`, (err, data) => {
    if(err) console.error(err);
    let bmp = new Bmp(data);

    transform.shuffle(bmp, (err, data) => {
      fs.writeFile(`${__dirname}/../assets/shuffle.bmp`, data.allData, function(err) {
        if(err) console.error(err);
      });
    });
  });


  fs.grayscale = function () {
    fs.readFile(`${__dirname}/../assets/grayscale.bmp`, (err, data) => {
      if(err) console.error(err);
      let bmp = new Bmp(data);

      transform.grayscale(bmp, (err, data) => {
        fs.writeFile(`${__dirname}/../assets/grayscale.bmp`, data.allData, function(err) {
          if(err) console.error(err);
        });
      });
    });
  };
};