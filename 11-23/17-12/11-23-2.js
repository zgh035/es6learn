


//将码点转换为对应的字符
// fromCharCode es5中的方法，但是不能识别32为的UTF-16
// fromCodePoint 可以识别32位的UTF-16


console.log(String.fromCharCode(0x20BB7));
console.log(String.fromCodePoint(0x20BB7))



let str = 'abcdef';
console.log(str.includes('a'))
let arr = ['a',['b'],'c'];
//includes可以判断元素是否在数组中存在
console.log(arr.includes('a'))


//str是不是以‘a'开头，支持第二个参数，表示从声明地方开始搜索
console.log(str.startsWith('a'))
console.log(str.startsWith('a',1))

//str是不是以’f'为结尾,第二参数表示搜索的前n个字符
console.log(str.endsWith('f',216))

//重复字符串，小数会被取整，如果是附属或Infinity会报错，参数如果是0到-1，等同于0
//参数NAN等同于0，如果参数是字符串会被转为数字，如果字符串对应的不是数字，那么会返回0
console.log(str.repeat(3))