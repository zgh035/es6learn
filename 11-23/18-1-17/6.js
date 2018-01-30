

let fs = require('fs');

//异步方式移动文件并且重命名
// fs.rename('../test.txt','./test.js',(err) => {
//     if(!err) {
//         console.log('移动成功！')
//     }
// });

// //同步方式移动文件
// fs.renameSync('./test.js','../test.txt');

//重命名文件

fs.rename('../test.txt','../test.txta',(err) => {

});