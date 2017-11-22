

//对象和数组组合解构赋值
let obj = {
    p : [
        "hello",
        {
            y : 'world'
        }
    ]
};

let { p : [x , { y }]} = obj;
console.log(x,y)


let obj1 = {
    a : [
        2
    ]
}
let {a : [ x1 ]} = obj1;
console.log(x1)


const node = {
    a1 : {
        b1 : {
            c1 : {
                d1 : 1,
                d2 : 2
            }
        }
    }
};

let { a1, a1 : { b1, b1 : { c1 , c1 : { d1,d2 } } } } = node;
console.log(a1,b1,c1,d1,d2)