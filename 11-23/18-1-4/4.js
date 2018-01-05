


class testClass12 {
    constructor () {
        return new Proxy(this,{
            get (target,key) {
                if(key[0] === '_'){
                    return undefined;
                }
            }
        });
    }

    a () {
        console.log('a')
    }

    _a() {
        console.log('_a')
    }
}

let abc12 = new testClass12();

abc12.a();
abc12._a();