let fs = require('fs');

let stream = fs.createReadStream('../test.txt',{
    start : 0,
    end : 0,
    flag : 'r',
    autoClose : true
});
let buf = new Buffer(120);
stream.on('open',(fd)=> {
    //fd是一个文件句柄
    console.log('开始读取文件');
});

stream.on('data',(data) => {
    console.log(data.toString())
});

stream.on('close',() => {
    console.log('读取文件结束');
})

stream.on('error',(err) => {
    console.log(err);
});

stream.on('end',() => {
    console.log('end')
})