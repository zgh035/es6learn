



//给已经声明的变量解构赋值
let obj = {};
let arr = [];

( { foo : obj.prop ,bar : arr[0] } = {foo : 123,bar : true} )

console.log(obj,arr)


//数组本质也是对象，可以将数组作为对象来使用
let arr1 = [1,2,3];

let { 0 : a,[arr1.length -1] : b} = arr1;
console.log(a,b)


let abc = {
    [obj.prop] : 1 //属性名表达式，属性名当中有变量的时候使用
}
console.log(abc);

//字符串的解构赋值
let [b2,c2,d2,e2,f2] = 'hello';
console.log(b2,c2,d2,e2,f2)

let {length : len} = 'hello';
console.log(len)

let {toString : s} = 123;
console.log(s())


//解构赋值的规则是，只要右边的不是对象或数组，就先将其转换为对象，
//如果右边是undefined或null，无法转化为对象，无法进行解构赋值