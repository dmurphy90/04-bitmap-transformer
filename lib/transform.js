'use strict';

const transform = module.exports = {};

transform.flipImage = function(bmp, callback) {
  let flipped = bmp.pixelArray.reverse();
  bmp.pixelArray = flipped;
  bmp.pixelArray.slice(54);
  callback(null, bmp);
};

transform.colorSwap = function(bmp, callback) {
  if (bmp.offset === 54){
    console.log('bmp.offset === 54');
    for (let i = 54; i < bmp.allData.length; i++){
      let inverse = 255 - bmp.allData[i];
      bmp.allData.writeUInt8(inverse, i);
    }
  } else {
    bmp.colors.forEach((value, index) => {
      bmp.colors.writeUInt8((255 - value), index);
    });
  }
  callback(null, bmp);
};

transform.shuffle = function(bmp, callback) {
  let array = bmp.pixelArray;
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  bmp.pixelArray = array;
  bmp.pixelArray.slice(54);
  callback(null, bmp);
};
