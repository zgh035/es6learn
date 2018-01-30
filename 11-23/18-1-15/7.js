


let test = new Buffer('我是谁');
//读取8位无符号的整形参数,第二个参数指定是否检查offset的正确性，如果offset超出了test的长度，
//第二个参数位true会直接返回undefined，第二个参数如果位false，会抛出异常
console.log(test.readUInt8(0,true));