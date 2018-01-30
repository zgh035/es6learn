

let buffer = require('buffer');
//获取单个实例允许的最大长度
console.log(buffer.constants.MAX_STRING_LENGTH);


let arr = new Uint32Array(2);
arr[0] = 0;
arr[1] = 1;

console.log(arr.buffer)