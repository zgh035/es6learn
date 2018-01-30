


let func = function () {
    this.name = 1;
}

func.prototype.sayName = function () {
    return this.name;
}

//如果是返回一个类，那么必须使用module.exports
module.exports =func;