


//函数柯里化

function currying (fn,n) {
    return function (m) {
        return fn.call(this,m,n);
    }
}


function tail (n,total) {
    if(n === 1) return total;
    return tail(n-1,n * total);
}

const test = currying(tail,1);


test(5);