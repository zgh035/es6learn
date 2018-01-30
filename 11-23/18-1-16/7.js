

let fs = require('fs');
let buf = new Buffer(100);

fs.open('./ap.txt','r',(err,fd) => {
    //异步读取某个字节开始位置的字符信息
    fs.read(fd,buf,0,6,3,(err,byteRead,buffer) => {
        console.log(buffer.slice(0,byteRead).toString('utf8'));
    });

    //同步方法返回的是实际读取字节的大小
    let i = fs.readSync(fd,buf,6,3,0);
    console.log(buf.slice(6,i).toString('utf8'));
});