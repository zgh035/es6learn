

let fs = require('fs');

let data = fs.readFileSync('./1.js');

//写文件
fs.writeFile('./test.txt',data,{
    //文件编码格式
    encoding : 'base64',
    //文件权限
    mode : '0666',
    //对文件采取的操作
    flag : 'a'
},(err) => {
    console.log(err)
});