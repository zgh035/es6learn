

let fs = require('fs');
let buf = new Buffer('测试');
fs.open('./ap.txt','w',(err,fd) => {
    fs.write(fd,buf,0,6,3,(err,write,buffer) => {
        console.log(write,buffer)
    });
});