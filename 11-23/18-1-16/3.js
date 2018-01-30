

let fs = require('fs');
//同步读取文件
let data = fs.readFileSync('./test.png',{
    encoding : 'base64',
    mode : 'r'
});

//异步写数据到文件中
fs.writeFile('./test复制.png',data,{
    encoding :'base64',
    flag : 'a+'
},(err) => {
    console.log(err);
});

//同步写数据到文件中
let d1 = fs.writeFileSync('./test复制1.png',data,{
    encoding : 'base64'
});

console.log(d1)