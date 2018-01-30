


let str = '我是谁';

let byteLen = Buffer.byteLength(str,'utf16le');

let buf = Buffer.allocUnsafe(byteLen);


for(let i = 0;i < str.length;i++ ){
    console.log(str.codePointAt(i))
    buf[i] = str.codePointAt(i);
}

console.log(buf.toString());


let buf1 = Buffer.from([1,2,3,4,5,6]);

let buf2 = Buffer.from([2,3,4,4,5]);

//如果source比target大返回1，否则返回-1
console.log(buf1.compare(buf2));