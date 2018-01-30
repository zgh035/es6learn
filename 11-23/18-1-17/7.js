


let fs = require('fs');

//创建文件的硬链接
// fs.link('../test.txta','../test.link',(err) => {
//     console.log(err)
// });


//删除文件的硬链接
fs.unlink('../test.link',(err) => {
    if(!err) console.log('删除成功');
});