

let fs = require('fs');
//同步读取文件
let data = fs.readFileSync('./test.txt','utf8');
console.log(data)
//异步读取文件信息
fs.readFile('./test.txt',(err,data) => {
    console.log(data.toString('utf8'))
});