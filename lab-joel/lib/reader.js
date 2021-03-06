'use strict';

const fs = require('fs');
const bitmap = require('./bitmap.js');
const reader = module.exports = {};
const transform = require('./transform.js');


reader.readWrite = function(inPath, outPath, transformMethod) {
  if(!transformMethod || !inPath || !outPath) return null;

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

  case 'blackAndWhite':
    dataTransformed = transform.blackWhite(bmp);
    break;

  default:
    return 'invalid transform method try: flipImage : invertColor : shufflePixels : blackAndWhite';
  }
  console.log('datatransfromed data === ', dataTransformed);
  try {
    if(typeof outPath !== 'string') return '===ERROR===Not and instance of bmp constructor ===ERROR===';
    fs.writeFileSync(outPath, dataTransformed.allData);
    return 'IMAGE TRANSFORMED';
  } catch (err) {
    console.error(err);
    return '===ERROR===Not and instance of bmp constructor ===ERROR===';
  }
};
