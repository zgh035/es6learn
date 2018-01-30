var fs = require('fs');
var readStream = fs.createReadStream('../test.txt');
var writeStream = fs.createWriteStream('../a.txt');

readStream.on('data', function(chunk) { // 当有数据流出时，写入数据
    //系统缓冲区的数据填满后暂停写数据，
    if (writeStream.write(chunk) === false) { // 如果没有写完，暂停读取流
        readStream.pause();
    }
});

writeStream.on('drain', function() { // 写完后，继续读取
    readStream.resume();
});

readStream.on('end', function() { // 当没有数据时，关闭数据流
    writeStream.end();
});