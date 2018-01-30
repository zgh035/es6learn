

let fs = require('fs');
//向文件中追加数据（异步方式）
fs.appendFile('./ap.txt','dfasdfasdfsda',{
    encoding:'utf8',
    flag : 'a'//默认为a
},(err) => {
    console.log(err)
});

fs.appendFileSync('./ap.txt','同步最佳',{
    encoding : 'utf8',
    flag : 'a'
});