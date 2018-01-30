

let fs = require('fs');

let fd = fs.openSync('./ap.txt','r');

let buf = new Buffer(100);

//回调参数第一个为错误信息，第二个为实际读取的字节数，第三个参数是缓存区对象
fs.read(fd,buf,0,20,0,(err,bytesRead,buffer) => {
    console.log(arg)
});