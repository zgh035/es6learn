







var s = "𠮷";
console.log(s.length)
//utf-16编码的字符，使用charAt得不到对应的字符
console.log(s.codePointAt(0))


let str = '是';
console.log(str.codePointAt(0).toString())

//使用length获取s的长度为3，使用for/of循环可以得到正确的长度
let s1 = '𠮷a';
for(let ch of s1) {
    console.log(ch.codePointAt(0).toString())
}


//数组获取字符串正确长度的方法
String.prototype.getLen = function () {
    let num = 0;
    for(let ch of this){
        num++;
    }
    return num;
}

console.log(s1.getLen())

//检测一个字符是由2个字节还是4个字节组成的方法
function is32Bit (c) {
    return c.codePointAt(0) > 0xFFFF;
}

console.log(String.fromCharCode('a'.codePointAt(0)))