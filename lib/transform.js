'use strict';

const transform = module.exports = {};

transform.flipImage = function(bmp, callback) {
  if(!bmp || typeof bmp !== 'object') return null;
  let flipped = bmp.pixelArray.reverse();
  bmp.pixelArray = flipped;
  bmp.pixelArray.slice(54);
  callback(null, bmp);
};

transform.colorSwap = function(bmp, callback) {
  if (bmp.offset === 54){

    for (let i = 54; i < bmp.allData.length; i++){
      let inverse = 255 - bmp.allData[i];
      bmp.allData.writeUInt8(inverse, i);
    }
  } else {
    console.log('FALSE COLOR');
    bmp.colors.forEach((value, index) => {
      bmp.colors.writeUInt8((255 - value), index);
    });
  }
  callback(null, bmp);
};

transform.shuffle = function(data, callback) {

  let array = data.pixelArray;
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  data.pixelArray = array;
  data.pixelArray.slice(54);
  callback(null, data);
};

transform.blackWhite = function(data, callback) {
  for(let i = 0; i < data.colors.length; i += 4) {
    let x = ((data.colors[i] + data.colors[i + 2] + data.colors[i + 1]) / 3);
    data.colors[i] = x;
    data.colors[i + 1] = x;
    data.colors[i + 2] = x;
  }
  callback(null, data);
};
