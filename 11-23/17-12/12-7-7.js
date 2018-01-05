


class staticClass {
    constructor (...args){
        this.args = args;
    }
    //静态方法,不会被实例继承，但是可以被子类继承
    static getargs () {
        //静态方法中的this指向类staticClass
        return this.args;
    }
    //可以有一个静态方法getargs和一个非静态方法getargs
    getargs () {
        return this.args;
    }
}

staticClass.args = 1;

console.log(staticClass.getargs());



let test = new staticClass(1,12,45,5);

//test实例调用类的静态方法
console.log(staticClass.getargs.call(test))
