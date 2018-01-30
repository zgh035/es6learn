

let buf = Buffer.from('buffer');

//entries返回一个Iterator接口，返回所有二进制数据
for(const [key,val] of buf.entries()) {
    console.log(key,val);
}

let buf1 = Buffer.from('a','base64');

let buf2 = Buffer.from('a','utf8');
//判断两个二进制数据是否相同，如果字符串相同，但是编码不同也会判定为不同
console.log(buf1.equals(buf2));