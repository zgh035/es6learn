



let msg = test`the total is ${1} (${2} with tag)`;

function test (lite) {
    let result = '';
    let i = 0;
    while(i < lite.length) {
        result += lite[i++];
        if(i < lite.length) {
            result += arguments[i];
        }
    }
    return result;
}
console.log(msg)