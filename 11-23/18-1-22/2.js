

//可以显示对象的所有方法，
//例如如果使用log方法输出Object，返回的是一个对象，而使用
//dir返回的是一个对象，还有全部的属性
console.dir(Object);
console.log(Object)


//console.time和console.timeEnd用于返回执行一段代码后所使用的时间
//两个函数的参数必须相同
console.time('1');
console.timeEnd('1')

let test = function (arg) {
    console.log(arg);
}
setTimeout(test,1000,'this is arguments');

timer.unref();

exports.test = test;

path.resolve(require.resolve('./2.js'));