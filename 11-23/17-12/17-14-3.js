



//嵌套函数

function insert (value) {
    return {into : function (arr) {
        return {after : function (aftrvalue) {
            arr.splice(arr.indexOf(aftrvalue) + 1,0,value);
        } }
    }}
}

console.log(insert(2).into([1,3].after(1)))


//做连续的操作，思路比较清晰
function deval (value) {
    return {
        add : function (addval) {
            return  {
                chen : function (chenval) {
                    return (value + addval) * chenval;
                }
            }
        }
    }
}
console.log(deval(1).add(2).chen(2))

const deva1 = (value) => ({
    add : (addVal) => ( {
        chen : (chenval) => (value + addVal) * chenval
    } )
})

console.log(deva1(1).add(2).chen(2))

