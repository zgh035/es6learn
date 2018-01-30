
let StringDecoder = require('string_decoder').StringDecoder;

let decode = new StringDecoder('utf8');

let str1 = new Buffer([0xe6,0x88,0x91,0xe5,0x96]);
let str2 = new Buffer([0x9c,0xe7,0x88,0xb1]);
//使用多个buffer分割字符串，可以使用stringDecoder来正确的输出字符串
console.log(decode.write(str1));
console.log(decode.write(str2));

