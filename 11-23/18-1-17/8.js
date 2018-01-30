


let fs = require('fs');
//为目录创建符号链接
// fs.symlink('../18-1-10','../test','dir',(err) => {
//     console.log(err)
// });

//为文件创建符号链接

// fs.symlink('../test.txta','../test.link',(err) => {
//     console.log(err);
// });


//使用lstat可以读取符号链接文件，
fs.lstat('../test.link',(err,stats) => {
    console.log(stats.isSymbolicLink())
});
//使用stat不可以读取符号链接文件
fs.stat('../test.link',(err,stats) => {
    console.log(stats);
});