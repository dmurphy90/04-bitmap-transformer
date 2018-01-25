'use strict';

const fs = require('fs');
const bitmap = require('./bitmap.js');
const
const reader = module.exports = {};


reader.readWrite = function(inPath, outPath, transformMethod) {
  try {
    let inputData = fs.readFileSync(inPath)
  } catch(err) {
    console.error(err);
  }

  let bmp = new Bmp(data);
};
