


let m2 = require('./2.js');



delete require.cache[require.resolve('./2.js')];

let m3 = require('./2.js');

//文件名
console.log(__filename)
//目录名
console.log(__dirname)