'use strict';

const fs = require('fs');

fs.readFile(`${__dirname}/../__test__/assets/bitmap.bmp`, (err, data) => {
  if(err) console.error(err);
  let buffer = data;
  let hex = data.toString('hex');

  fs.writeFile(fd, buffer[, offset[, length[, position]]], callback);
});
