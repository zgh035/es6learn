



//使用表达式来定义类，
//类的真正名字是myClass而不是Me，但是
//Me可以在class内部使用，指代当前类
const myClass = class Me {
    getClassName () {
        return Me.name;
    }
}

let a = new myClass();

console.log(a.getClassName())



//立即执行类
let person = new class {
    constructor (name) {
        this.name = name;
    }
    sayName () {
        console.log(this.name);
    }
}('张三');
person.sayName();