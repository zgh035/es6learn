

let prox = new Proxy({},{
    set (target,key,value,receive) {
        let success = Reflect.set(target,key,value,receive);
        if(success) {
            console.log(success);
        }
        return success;
    },
    get (target,key,receive) {
        console.log('get')
        return Reflect.get(target,name);
    },
    deleteProperty (target,name) {
        console.log(arguments);
        return Reflect.defineProperty(target,name);
    }
});

prox.a = 1;
console.log(prox.a)