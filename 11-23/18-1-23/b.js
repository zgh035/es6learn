console.log('b starting');
module.exports = {
    done : false
}
//为了防止一个无穷的循环
//一个未完成的a.ja副本的exports导出对象被返回到b.js模块，然后b.js完成加载
const a = require('./a.js');
console.log('in b, a.done = %j', a.done);
module.exports = {
    done : true
}
console.log('b done');