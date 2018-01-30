

let buffer = require('buffer');

let buf = Buffer.from('111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111');
// buffer.INSPECT_MAX_BYTES = 10000;
console.log(buffer.INSPECT_MAX_BYTES);
console.log(buf)

console.log(buffer.kMaxLength)