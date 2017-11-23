


//反引号 ` 可以将引号内的内容全部原格式输出，里面也可以包含变量
let str = 'a';
let test = `asdf
asdf
    ${str}


    ${f()}

   asdfasdf
asdfasdf`;
console.log(test)


function f () {
    return 'abc';
}




//trim可以去掉字符串的前后空格
let str1 = '  a  ';
console.log(str1.trim().length)

let addrs = [
    { first : 'a',last : 'b'}
];

//模板字符串能够嵌套，嵌套的地方在变量使用的方引号内，
const html1 = addrs => `
    <table>
        ${
            addrs.map(addr => `
                <tr><td>${addr.first}</td></tr>
            `).join('')
        }
    </table>
`;

console.log(html1(addrs))



//引用模板字符串本身
let str2 = '(name) => `hello ${name}`';
let func = eval.call(null,str2);
console.log(func('jack'))



//模板标签

console.log`123`
console.log`aaa`




function tag (str,...num) {
    console.log(str,num);
}

//这里传入tag函数的参数分别是   ['Hello ',' world',''] , 1, 2
tag`Hello ${ 1 } world ${ 2 }`;



