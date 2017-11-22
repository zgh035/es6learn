


//再解构赋值的语句中，使用圆括号可能会导致解析问题
//所以一般不使用圆括号

//以下三种解构赋值不可以使用圆括号


//1。变量声明语句
let [(a)] = [1];
let {x : (c)} = {};
let ({x : c}) = {};
let {(x : c)} = {};
let {(x) : c} = {};

//2.函数参数
//函数参数也属于变量声明，不能带括号
function f([(x)])

function f([z,(x)])

//3.赋值语句的模式
({p : a}) = {p : 42}


//可以使用括号的方法

//1.
[(b)] = [3];
({p : (b)} = {})
[(t)] = [2]

//不是变量声明的语句进行对象的解构赋值，最外层必须加括号
//如果不加，{a}会被认为是一个代码块
({a} = {a : 1})
