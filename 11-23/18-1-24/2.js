

let buf1 = Buffer.from('hello world','utf8');

//从buf1复制的数据不是引用，而是一个新的buffer数据
let buf2 = Buffer.from(buf1);

buf1[0] = 0x61;
console.log(buf1.toString());
console.log(buf2.toString());


let buf3 = Buffer.from('test','utf8');

console.log(buf3.toString());

//判断一个元素是否为二进制缓存区对象
console.log(Buffer.isBuffer(buf1));

console.log(Buffer.isBuffer('a'));


//判断一个字符串是否是一种编码类型
console.log(Buffer.isEncoding('utf8'));

console.log(Buffer.isEncoding('abc'));

console.log(Buffer.poolSize);