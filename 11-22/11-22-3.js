




//函数也可以使用解构赋值
function add ([x,y]) {
    return x + y;
}

console.log(add([1,2]))


console.log([[1,2],[3,4]].map ( ([a,b]) => a + b ));



//函数的解构赋值也支持默认值,这里是为x和y指定默认值，
function move({ x = 0,y = 0} = {}) {
    return [x,y];
}

console.log(move({x : 1,y : 2}));
console.log(move())

//这里是为传入的参数，x 和y制定默认值，如果没有传入参数
//那么就会有默认的参数{x : 0,y : 0}传入
function move1({x,y} = {x : 0,y : 0}) {
    return [x,y];
}
console.log(move1({x : undefined,y : 1}));
console.log(move1())

let zgh = null;
let d1a = null;

[(zgh)] = ['abc']
console.log(zgh);//这一行和下一行如果都有圆括号，那么必须再第一行使用分号

({p1 : (d1a)} = {p1 : 1});
console.log(d1a);
[(d1a)] = [3];
console.log(d1a);