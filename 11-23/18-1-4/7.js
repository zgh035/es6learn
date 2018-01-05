

let obj1 = {
    a : 1,
    b : 2,
    get test () {
        return this.a + this.b;
    }
}

let receiver = {
    a : 2,
    b : 4
};
//如果指定了第三个参数，并且读取的test属性设置了读取器，那读取器里面的this会绑定到receiver上，
//否则是绑定到第一个参数上
console.log(Reflect.get(obj1,'test'));