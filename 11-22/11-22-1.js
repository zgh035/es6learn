


let obj = {
    p : [
        "hello",
        {
            y : 'world'
        }
    ]
};

let { p : [x , { y }]} = obj;
console.log(x,y)