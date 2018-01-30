


let fs = require('fs');

let file = fs.createReadStream('../test.txt');

let out = fs.createWriteStream('../tst.复制.txt');

file.on('data',(data) => {
    out.write(data,() => {
        console.log(data.toString())
    });
});

out.on('open',() => {
    console.log('开始复制了');
});

file.on('end',() => {
    out.end('再见',() => {
        console.log('复制完成！'+out.bytesWritten);
    });
});