

let con = function (...arg) {
    let [a,b,c] = [...arg];
    console.log(a,b,c);
}
//创建实例的新方法，和new Fn的原理一样
const instance = Reflect.construct(con,[1,2,3]);


//如果传入的不是一个对象会直接报错，而Object.getProtoType会先转换为对象，再获取原型
Reflect.getPrototypeOf