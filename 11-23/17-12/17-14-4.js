


//reduce的用法
//func是回调函数，里面有2个参数，defaultval是默认值
[1,2,3,4,5].reduce( func, [defaultval] );



const a = (...args) => 
    val => args.reduce( (a,b) => b(a) ,val );


const t1 = (a) => a + 1;
const t2 = (a) => a * 2;

const test = a(t1,t2);

test(5)