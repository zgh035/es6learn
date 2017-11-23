


//解构赋值的用途
let x = 1;
let y = 2;
[x,y] = [y,x];

console.log(x,y)

//从函数返回多个值,返回一个数组
function example () {
    return [1,2,3];
}

let [a,b,c] = example();
console.log(a,b,c)

//函数返回一个对象
function example1() {
    return {
        a : 1,
        b : 2,
        c : 3
    }
}
let {a : a1,b : b1} = example1();
console.log(a1,b1)

//函数参数的意义
//对于参数是对象的函数，参数的顺序可以是乱的
function f ({x,y,z}) {
    return {
        x,y,z
    }
}
f({y : 1, x : 2,z : 3})



//提取JSON数据
let jsonData = {
    id : 1,
    status : 'ok'
};
let {id,status} = jsonData;
console.log(id,status)


function test ( { async = true,b = 1} = {} ){
    console.log(async)
}

test();

let map = new Map();
map.set('a',1)
console.log(map['a'])