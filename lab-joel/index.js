'use strict';

const fs = require('fs');
const Bmp = require('./lib/bitmap.js');
const transform = require('./lib/transform.js');
const reader = require('./lib/reader.js');


reader.readWrite('assets/bitmap.bmp', 'assets/invertColorMap.bmp', 'invertColor');
reader.readWrite('assets/bitmap.bmp', '__test__/testassets/invertColorMapTest.bmp', 'invertColor');

reader.readWrite('assets/bitmap.bmp', 'assets/flippedMap.bmp', 'flipImage');
reader.readWrite('assets/bitmap.bmp', '__test__/testassets/flippedMapTest.bmp', 'flipImage');

reader.readWrite('assets/bitmap.bmp', 'assets/shuffleMap.bmp', 'shufflePixels');
reader.readWrite('assets/bitmap.bmp', '__test__/testassets/shuffleMapTest.bmp', 'shufflePixels');

reader.readWrite('assets/bitmap.bmp', 'assets/blackWhite.bmp', 'blackAndWhite');
reader.readWrite('assets/bitmap.bmp', '__test__/testassets/blackWhiteMapTest.bmp', 'blackAndWhite');
