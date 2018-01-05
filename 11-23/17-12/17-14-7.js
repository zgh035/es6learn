


//获取浏览器最大的递归调用次数


function countA () {
    try {
        return 1 + countA();
    }catch(e) {
        return 1;
    }
}
countA();