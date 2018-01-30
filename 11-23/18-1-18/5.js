

let fs = require('fs');

let stream = fs.createWriteStream('../test.txt');

//监听写入错误
stream.on('error',(err) => {
    console.log(err)
});

stream.write('test');

stream.end();

stream.write('te');

