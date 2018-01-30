
//用来将二进制数据转换为字符串
let StringDecoder = require('string_decoder').StringDecoder;
//StringDecoder([encode])//encode表示编码的格式
let test = new StringDecoder();

let binary = new Buffer('我是谁');

console.log(test.write(binary));