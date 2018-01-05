



//padStart表示补全字符串的头部，第一个参数表示总共的位数，
//第二个参数表示要补全的字符串/
//如果第二个 参数大于要填充的长度，则只会截取一部分，
//省略第二个参数，默认使用“ ”补全字符
console.log('x'.padStart(5,'0'))
//补全字符串的尾部
console.log('x'.padEnd(5,'0'))




//
console.log('99'.padStart(10,'YYYY-MM-dd HH:mm:ss'))