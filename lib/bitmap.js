'use strict';

module.exports = function(buffer) {
  this.allDAta = buffer;
  this.sig = buffer.toString('utf-8', 0, 2);
  this.fileSize = buffer.readUInt32LE(2);
  this.width = buffer.readUInt32LE(10);
  this.height = buffer.readUInt32LE(22);
  this.pixelArray = buffer.slice(54, this.offset);
};

var str1 = new Buffer(15);
str1.write('NodeJS', 'utf8');
console.log(str1.toString('utf8'));
