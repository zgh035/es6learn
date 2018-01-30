

let buf = new Buffer.from([1,2,3]);
console.log(buf);

let arr = new Uint16Array(2);

arr[0] = 2;
arr[1] = 3;
console.log(arr.buffer)
let buf1 = new Buffer.from(arr.buffer,0,1);

console.log(buf1.toString());