

const abc = class test {

}

console.log(abc.name)


class myClass {
    constructor () {

    }
    //prop的取值函数,设置再descriptor上的
    get prop () {
        return 'abc';
    }
    //prop的存值函数,设置再descriptor上的
    set prop (aaa) {
        console.log(aaa);
    }
}

let zgh = new myClass();
console.log(zgh.prop)
zgh.prop = 1;

//
console.log(Object.getOwnPropertyDescriptor(myClass.prototype,'prop'))