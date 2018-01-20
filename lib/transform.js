'use strict';

const transform = module.exports = {};

transform.flipImage = function(bmp, callback) {
  let flipped = bmp.pixelArray.reverse();
  bmp.pixelArray = flipped;
  bmp.pixelArray.slice(54);
  callback(null, bmp);
};

transform.grayscale = function (bmp, callback) {
  let altBuffer = Buffer.from(data), grayInt, i = 54;
  do {
    grayInt = (altBuffer.readUInt8(i) + altBuffer.readUInt8(i + 1) + altBuffer.readUInt8(i + 2)) / 3;
    altBuffer.writeUInt8(grayInt, i), altBuffer.writeUInt8(grayInt, i + 1), altBuffer.writeUInt8(grayInt, i + 2);
    callback(null, altBuffer);
    i += 4;
  } while (i < 1078);
};