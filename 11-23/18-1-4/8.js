

let obj = {
    a : 2
};


let prox = new Proxy(obj,{
    set (target,key,val,receiver) {
        //代理了set方法，并且使用了Reflect.set方法，最后一个参数传入receiver会触发defineProperty方法
        console.log('set');
        Reflect.set(target,key,val,receiver);
    },

    defineProperty(target,key,attribute) {
        console.log('defineProperty');
        Reflect.defineProperty(target,key,attribute);
    }
});


prox.a = 'A';
console.log(obj,prox)
