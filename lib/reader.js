'use strict';

const fs = require('fs');
const bitmap = require('./bitmap.js');
const reader = module.exports = {};
const transform = require('./transform.js');


reader.readWrite = function(inPath, outPath, transformMethod) {
  try {
    var inputData = fs.readFileSync(inPath);
  } catch(err) {
    console.error(err);
  }

  let bmp = new bitmap(inputData);

  let dataTransformed;

  switch (transformMethod) {

  case 'flipImage':
    dataTransformed = transform.flipImage(bmp);
    break;

  case 'invertColor':
    dataTransformed = transform.colorSwap(bmp);
    break;

  case 'shufflePixels':
    dataTransformed = transform.shuffle(bmp);
    break;

  default:
    console.log('invalid transform method try: flipImage : invertColor : shufflePixels');
  }
  console.log('datatransfromed data === ', dataTransformed);
  try {
    fs.writeFileSync(outPath, dataTransformed);
    return 'SUCCESS IMAGE TRANSFORMED';
  } catch (err) {
    console.error(err);
    return '===ERROR===L43reader';
  }
};

reader.readWrite('../assets/bitmap.bmp', '../assets/invertColorMap.bmp', 'invertColor');
