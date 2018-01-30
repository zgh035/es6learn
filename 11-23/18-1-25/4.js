

let buf = Buffer.alloc(4);

console.log(buf)
//第二个参数表示不对第一个参数进行校验，也就是说如果第二个参数超出buff的length
//不会报错
// console.log(buf.readInt8(10,true))

buf.writeFloatBE(1, 0);

console.log(buf.toString())

console.log(buf.readFloatBE(0));