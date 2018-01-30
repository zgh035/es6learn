


let fs = require('fs');


//截断文件操作，可以修改文件大小，如果第二个参数小于文件大小，会截取文件
//如果第二个参数大于文件大小，则会在文件中进行插入二进制数据
fs.truncate('../test.txt',100,(err) => {
    fs.stat('../test.txt',(err,stats) => {
        console.log(stats.size)
    });
});

//读取文件后截断文件

fs.open('../test.txt','w',(err,fd) => {
    fs.ftruncate(fd,5,(err) => {
        console.log(err)
    });
});