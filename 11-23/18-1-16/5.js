

let fs = require('fs');
//异步方式打开文件
fs.open('./ap.txt','r',(err,fd) => {
    console.log(fd)
});

//同步方式打开文件
console.log(fs.openSync('./ap.txt','r'));