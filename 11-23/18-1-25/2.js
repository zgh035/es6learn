


let buf = Buffer.from('你是谁','utf8');

let StringDecoder = require('string_decoder').StringDecoder;

let dec = new StringDecoder('utf8');

buf.write('我',0,3);

console.log(buf.toString('utf8',0,6));

console.log(dec.write(buf.slice(0,5)));
//将存储在内部的字节数据读取出来，如果有参数，会自动调取一次write方法，后面再使用wrtie
//不会再继续使用内部保存的字节
console.log(dec.end(buf.slice(5)))
//上一个字节中多出的字节会在下个write方法调用的时候获取不完整的字节在
//下个输出中使用
console.log(dec.write(buf.slice(5)));

// let str1 = buf.slice(0,4);

// let str2 = buf.slice(4);

// //链接两个buffer对象
// let str = Buffer.concat([str1,str2]);

// console.log(str1.toString(),str2.toString());
// console.log(str.toString())

