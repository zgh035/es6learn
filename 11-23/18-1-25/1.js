
//创建一个二进制缓存区对象，如果没有指定用什么字符填充，
//默认就会使用0来填充，速度比较慢
let buf = Buffer.alloc(10,'a','utf8');

console.log(buf)
//创建一个二进制缓存区对象，不能指定默认填充字符
//会使用创建内存中的默认数据，速度比较快
let buf1 = Buffer.allocUnsafe(10);

//向二进制缓存对象中填充数据，第二个和第三个参数都不可以超过buf的长度
buf1.fill('a',0,3)

console.log(buf1)

let buf2 = Buffer.allocUnsafeSlow(10).fill(0);

console.log(buf2)

//查看一个字符串在对应编码下的字节长度
console.log(Buffer.byteLength('我是说','utf8'));

const buf3 = Buffer.allocUnsafe(256);

const len = buf3.write('\u00bd + \u00bc = \u00be', 0);

// Prints: 12 bytes: ½ + ¼ = ¾
console.log(`${len} bytes: ${buf3.toString('utf8', 0)}`);