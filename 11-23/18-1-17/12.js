

let fs = require('fs');


//监视文件
fs.watchFile('../test.txt',{
    //设置执行了监视文件的操作后，是否停止当前的应用程序
    persistent : true,
    //设置每隔多少毫秒监视一次文件是否发生该百年
    interval : 10
},(curr,prev) => {
   if(Date.parse(prev.ctime) === 0) {
       console.log('文件被创建');
   }else if(Date.parse(curr.ctime) === 0) {
       console.log('文件被删除')
   }else if(Date.parse(curr.mtime) !== Date.parse(prev.mtime)){
       console.log('修改了文件');
   }
 
});
fs.unwatchFile('../test.txt',() => {

});