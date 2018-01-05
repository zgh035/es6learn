


let x = 1;
//参数默认值是不传值的，每次都会计算参数表达式值
function tet(p = x + 1){
    console.log(p);
}

tet();


//这里只是使用了对象的解构复制的默认值
function ({x,y = 2}) {

}

//函数参数的默认值
function ({} = {}) {}

//函数参数使用默认值和对象的解构赋值的默认值
function ({x,y = 2} = {}) {}


(function a (a) {}).length //为1，函数的长度表示该函数预期传入的参数个数，如果有了默认值，该值就会减1


(function a (a = 1,b,c)) //如果设置了默认值的参数不知尾参数，那么length不会计入后面参数的个数