'use strict';

const transform = module.exports = {};

transform.flipImage = function(bmp, callback) {
  let flipped = bmp.pixelArray.reverse();
  bmp.pixelArray = flipped;
  bmp.pixelArray.slice(54);
  callback(null, bmp);
};

transform.colorSwap = function(bmp, callback) {
  console.log('function started');
  console.log('bmp.offset = ', bmp.offset-1024);
  console.log('bmp.colors = ', bmp.colors);
  if (bmp.offset === 54){
    console.log('bmp buffer BEFORE ', bmp.allData);
    console.log('bmp.offset === 54 TRUE');
    console.log('BUFFER === ', bmp.allData.length);
    for (let i = 54; i < bmp.allData.length; i++){
      let inverse = 255 - bmp.allData[i];
      bmp.allData.writeUInt8(inverse, i);
    }
    console.log('bmp buffer AFTER ', bmp.allData);
  } else {
    console.log('reached false');
    bmp.colors.forEach((value, index) => {
      bmp.colors.writeUInt8((255 - value), index);
    });
  }
  callback(null, bmp);
};

transform.shuffle = function(bmp, callback) {
  console.log('enter shuffle');
  let array = bmp.pixelArray;
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  bmp.pixelArray = array;
  bmp.pixelArray.slice(54);
  callback(null, bmp);
};

transform.grayscale = function (bmp, callback) {
  let altBuffer = Buffer.from(bmp.buffer), grayInt, i = 54;
  do {
    grayInt = (altBuffer.readUInt8(i) + altBuffer.readUInt8(i + 1) + altBuffer.readUInt8(i + 2)) / 3;
    altBuffer.writeUInt8(grayInt, i), altBuffer.writeUInt8(grayInt, i + 1), altBuffer.writeUInt8(grayInt, i + 2);
    callback(null, altBuffer);
    i += 4;
  } while (i < 1078);
};