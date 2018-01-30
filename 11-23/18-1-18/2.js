


let fs = require('fs');

let stream = fs.createReadStream('../test.txt',{
    flag : 'r',
    encoding : 'utf8'
});

//暂停读取文件信息
stream.pause();

stream.on('data',(data) => {
    console.log(data.toString())
});

setTimeout( () => {
    //重新开始读取文件
    stream.resume();
},5000);