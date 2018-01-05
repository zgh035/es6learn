



//抽象类，父类不能够实例化，只能够再子类中实例化
class myClass {
    constructor (name) {
        if (new.target === myClass){
            throw new Error('这个类不能被实例化');
        }else{
            this.name = name;
        }
    }
}


class childClass extends myClass{
    constructor (name) {
        super(name);
    }
}

let test = new childClass();

console.log(test.name)