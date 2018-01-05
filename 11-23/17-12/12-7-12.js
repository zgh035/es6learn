

/**
 * 函数参数指定默认值
 * @param {*} x 
 * @param {*} y 
 */
function log (x = 0,y = 0) {
    //参数里面存在的变量不能再次定义
    let x = 1;
    console.log(x,y);
}


log(1,2)
log(1);
log(1,'')