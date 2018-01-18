'use strict';

const fs = require('fs');
const Bmp = require('./lib/bitmap.js');

fs.readFile('./assets/bitmap.bmp', (err, data) => {
  let bmp = new Bmp(data);
  console.log(bmp);
  
  console.log(bmp.pixelArray.length);
});