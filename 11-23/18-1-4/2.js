


//设置读写对象的代理器
var obj = new Proxy({1 : 1},{
    get : function (target,key,receiver) {
        console.log(target,key,receiver);
    },
    set : function (target,key,val,receiver) {
        console.log(target,key,val,receiver)
    }
});

obj.a = 1

var proxy = new Proxy({},{
    get : function (target,property) {
        return 35;
    }
});

a = Object.create(proxy);

a.b


var obj1 = {
    proxy : new Proxy({},{
        get : function () {
            return 1;
        }
    })
};

obj1.a


let test = function (...ele) {
    let handler = {
        get (target,key,receiver) {
            let index = Number(key);
            if(index < 0) {
                key = target.length + index;
            }
            return Reflect.get(target,key,receiver);
        }
    };
    let target = [];
    target.push(...ele);
    return new Proxy(target,handler);
}

let arr = test('a','b','c');
arr[-1]