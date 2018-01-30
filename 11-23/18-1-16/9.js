


let fs = require('fs');

let buf = new Buffer('我是岁');

fs.open('./ap.txt','w',(err,fd) => {
    //第一次第5个参数为null，表示从文件末尾开始写入字符串，0也表示从末尾添加
    fs.write(fd,buf,3,3,0,(err,write,buff) => {
        //如果第5个参数为null，表示从上次写入的地方开始写入
        fs.write(fd,buf,6,3,null,(err,write,buffer) => {
            console.log(buffer)
            fs.close(fd,(err) => {
                console.log(err)
            });
        })
    })
});