

let fs = require('fs');


//这个方法只能删除空目录，可以删除目录的符号链接
fs.rmdir('../a',(err) => {
    console.log(err)
});