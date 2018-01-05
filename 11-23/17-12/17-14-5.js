

//尾调用优化
//函数调用在内存中会生产一个调用记录，又称为调用帧，保存调用位置和内部变量信息，
//例如
function a () {
    //b操作和a操作没有太大关系，可以直接执行b操作
    return b();
}

// 可以优化成
b();//把外层的函数a直接去掉


//这个不能进行尾调用优化，因为内层函数调用了外层函数的变量
function addOne(a){
    var one = 1;
    function inner(b){
      return b + one;
    }
    return inner(a);
  }

//