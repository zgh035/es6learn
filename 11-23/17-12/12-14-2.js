



//bind返回的函数，name属性会加上bound前缀
function foo () {};
console.log(foo.bind({}).name);


//这里会报错，因为加上括号被认为是代码块
const test = () => {a :1,b : 2};

//这样写是正确的
const test1 = () => ({a : 1,b : 2})


//如果只需要执行一条语句，而且没有返回值
const test2 = () => void test1();


const num = [2,3,4].map( (item) => item * item);


//将输入的参数返回一个数组
const numbers = (...args) => args;


//箭头函数的注意事项
//1.函数体内的this指向的是定义时所在的对象，而不是执行时指向的对象，总是取外层有this的this值
//2.箭头函数不可以当作构造函数来使用，
//3.不可以使用arguments，可以使用reset对象来代替
//4.在箭头函数里面，arguments，super，new.target都访问不到
//5.箭头函数不能使用call，apply，bind这些方法
function foo () {
    return () => {
        return () => {
            return () {
                //这里的id取的是foo层的id
                console.log(this.id);
            }
        }
    }
}


