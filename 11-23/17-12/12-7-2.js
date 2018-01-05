


//定义类的方法
//在类里面配置的方法是 不可枚举的
class point {
    constructor (x,y) {
        this.x = x;
        this.y = y;
    }
    toString () {
        return '{' + this.x + ',' + this.y + '}';
    }
}

console.log(typeof point)
console.log(point === point.prototype.constructor)


let b = new point(1,2);
console.log(b.toString());
/**
 * Object.assign可以一次性项类添加多个方法
 */
Object.assign(point.prototype,{
    toValue () {
        return this.x + this.y;
    }
});

console.log(b.toValue())

console.log(Object.keys(point.prototype))