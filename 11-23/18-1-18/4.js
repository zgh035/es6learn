

let fs = require('fs');

let stream = fs.createWriteStream('../test.txt');

for(let i = 0,j = 10000000;i < j;i++) {
    stream.write(i.toString());
}
//当写满的系统缓冲区，写入到文件后触发
stream.on('drain',() => {
    console.log('系统缓冲区的内容已经全部写入到文件中');
});