'use strict';

const transform = module.exports = {};

transform.flipImage = function(bmp) {
  let flipped = bmp.pixelArray.reverse();
  bmp.pixelArray = flipped;
};