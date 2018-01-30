


let fs = require('fs');


//修改文件权限
// fs.chmod('../test.txt',0100,(err) => {
//     console.log(err);
// });

// //同步修改文件权限
// fs.chmodSync('../test.txt',0700,(err) => {
//     console.log(err)
// });

fs.open('../test.txt','w',(err,fd) => {
    fs.fchmod(fd,0711,(err) => {
        fs.closeSync(fd);
    });
});