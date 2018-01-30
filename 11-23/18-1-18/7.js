

let fs = require('fs');

let file = fs.createReadStream('../test.txt');

let out = fs.createWriteStream('../test.a.txt');
//复制file中的数据到out
file.pipe(out,{
    end : false
});
out.write('acb');

file.on('end',() => {
    console.log('zaijian')
})