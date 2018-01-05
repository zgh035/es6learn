


function sum(x,y) {
    if(y > 0){
        return sum(x + 1,y - 1);
    }else{
        return x;
    }
}


function sum_yh (x,y) {
    if(y > 0) {
        return sum.bind(null,x + 1,y - 1);
    }else{
        return x;
    }
}

function trampoline (f) {
    while(f && f instanceof Function) {
        f = f();
    }
    return f;
}

trampoline(sum_yh(1,10000000000))

//函数的参数最后面的位置可以添加一个逗号