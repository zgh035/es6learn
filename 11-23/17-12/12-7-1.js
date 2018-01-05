

//flags返回正则的修饰符号
console.log(new RegExp('[0-9]','i').flags)

// -u 表示匹配utf-16的字符

var s = '𠮷';
//带上 -u可以匹配utf-16的字符
console.log(/^.$/u.test(s))