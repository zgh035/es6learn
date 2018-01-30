

let buffer = require('buffer');

let buf = Buffer.from('abc');

let newBuf = buffer.transcode(buf,'utf8','ascii');

console.log(newBuf.toString())