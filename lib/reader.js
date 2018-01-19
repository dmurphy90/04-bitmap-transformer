'use strict';

const fs = require('fs');
const Bmp = require('../lib/bitmap.js');
const transform = require('../lib/transform.js');

fs.readFile(`${__dirname}/../assets/bitmap.bmp`, (err, data) => {
  if(err) console.error(err);
  let newMap = new Bmp(data);

  reader.changeImage(newMap, (err, data) => {
    fs.writeFile('../assets/bitmapMapbit.bmp', data.allData, err => err ? console.error(err) : undefined);
  });
  
});
