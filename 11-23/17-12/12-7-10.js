


class myClass {
    constructor () {
        //这里new.target表示没有Class这个类
        //如果这个类被子类继承，那么这个new.target表示子类
        console.log(new.target);
    }
}

class childClass extends myClass {
    constructor () {
        //调用父类的构造方法
        super();
    }
}

let t1 = new childClass();


let test = new myClass();


