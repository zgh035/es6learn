

let buf = Buffer.from('this is a buffer');



//判断一个字符串是否在一个二级制对象中
console.log(buf.includes('is',1,'utf8'));

//返回查找字符串所在的位置，第二个参数表示开始查找的位置，第三个参数表示查找字符串的编码格式，默认为utf8
//第一个参数必须是字符串/数字或buffer对象，否
console.log(buf.indexOf('is',1,'utf8'));


for (const value of buf.values()) {
    console.log(value);
  }