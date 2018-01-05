





function point (x,y) {
    this.x = x;
    this.y = y;
}


point.prototype.toString = function () {
    return '{' + this.x + ',' + this.y + '}';
};


var p = new point(1,2);
console.log(p.toString())


let test = {};

//point和abc共享一个原型
let abc = point.bind(test,0);

console.log(abc.toString());