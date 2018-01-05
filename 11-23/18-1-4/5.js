

let handler = {
    apply (target,ctx,args) {
        return Reflect.apply(...arguments) * 2;
    }
}

function sum (x,y) {
    return x + y;
} 

let con1 = new Proxy(sum,handler);

console.log(con1(1,2))