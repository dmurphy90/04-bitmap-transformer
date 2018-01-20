'use strict';

const transform = module.exports = {};

transform.flipImage = function(bmp, callback) {
  let flipped = bmp.pixelArray.reverse();
  bmp.pixelArray = flipped;
  bmp.pixelArray.slice(54);
  callback(null, bmp);
};