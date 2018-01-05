

//类的属性名 可以采用表达式
//类和模块的内部，默认就是严格模式，
//constructor方法必须添加，否则会自动添加一个新的方法
let methName = 'getData';

class square {
    constructor (length){

    }

    [methName] () {
        return 'test'
    }
}

let b = new square();

console.log(b.getData());


//根据对象在原型上添加方法，这会影响到所有的实例
let proto = Object.getPrototypeOf(b);

proto.abc = function () {
    console.log('abc');
}

b.abc();