

let fs = require('fs');

//返回文件的真实地址
fs.realpath('./1.js',(err,realPath) => {
    console.log(realPath)
});

//同步返回文件的真实地址
console.log(fs.realpathSync('../18-1-17/2.js',{
    '/18-1-17' : '/est/asfdasdf'
}));

//修改文件的访问时间和修改时间

fs.stat('./1.js',(err,stat) => {
    console.log(stat.atime,stat.mtime);
});

//同步改变文件的访问时间和修改时间
fs.utimesSync('./1.js',new Date(2015,1,1),new Date());

fs.stat('./1.js',(err,stat) => {
    console.log(stat.atime,stat.mtime);
});