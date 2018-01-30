

let fs = require('fs');

fs.stat('../test.txt',(err,stats) => {
    //判断是否是一个文件
    console.log(stats.isFile())
    //判断是否位一个文件夹
    console.log(stats.isDirectory());
    //查看是否是websocket文件
    console.log(stats.isSocket())
});

//同步查看文件信息
let stats = fs.statSync('./1.js');

console.log(stats)

console.log(fs.exists('a.js',exits => {
    console.log(exits)
}));

console.log(fs.existsSync('b.js'));