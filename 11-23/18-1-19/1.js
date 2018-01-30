


let fs = require('fs');


let file = fs.createReadStream('../test.txt');

//设置读出的数据以什么编码
file.setEncoding('utf8');
file.pause()
  .on('end', () => {
    console.log('Reached the end, but did not read anything.');
  });

// file.on('readable', () => {
//     let chunck = null;
//     console.log(file.read())
//     //read方法用于读取数据，里面可以有一个参数指定读取多少格字节的数据
//     while(null !== (chunck = file.read())){
//         console.log(`length is ${chunck.length}`);
//     }
// });

file.on('data',(data) => {
    console.log(data)
    return 1;
})