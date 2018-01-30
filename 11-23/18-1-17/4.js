

let fs = require('fs');

fs.open('../test.txt','a',(err,fd) => {
    let stats = fs.fstatSync(fd);
    console.log(stats.atime,stats.mtime);
    //修改文件的查看时间和修改时间时，open的flag必须为可写的
    fs.futimes(fd,1388648322,1388648322,(err) => {
        let stats1 = fs.fstatSync(fd);
        console.log(stats1.atime,stats1.mtime)
    });
   
});