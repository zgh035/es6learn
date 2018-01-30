

let buf = Buffer.from('who am i?','utf8');


let buf1 = Buffer.allocUnsafe(9182);

//赋值buf里面的数据到buf1里面，第二个参数表示buf1中开始复制的地方，第三个参数表示buf中开始复制的地方
//第四个参数表示buf中结束复制的地方
buf.copy(buf1,0,3,9);
console.log(buf1)
//链接多个buffer对象，第二个参数表示合并后二进制对象的大小
let buf2 = Buffer.concat([buf,buf1],1);

console.log(buf2)

console.log(buf1.length)

console.log(Buffer.poolSize);