

//初始化一个二进制缓存区对象，并用第二个参数来填充数据，第三个参数指定编码格式
let buf = Buffer.alloc(10,'a','utf8');

console.log(buf.toString('utf8',0,3))