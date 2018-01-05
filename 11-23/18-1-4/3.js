let pic = (function () {
    return function (value) {
        let funcs = [];
        let proxy = new Proxy({},{
            get : function (target,key) {
                if(key === 'get'){
                    return funcs.reduce( function (val,fn){
                        return fn(val);
                    },value);
                }

                funcs.push(window[key]);
                return proxy;
            }
        });
        return proxy;
    }
})();

let double = n => n * 2;

pic(2).double.get


//如果一个属性设置了不可写，不可配置，那么该属性不能够被代理

let t1 = Object.defineProperty({},'foo',{
    value : 1,
    writable : false,
    configurable : false
});


let han1 = {
    get (target,key) {
        return 'foo';
    }
};

let proxy = new Proxy(t1,han1);
prox.foo//这里会报错