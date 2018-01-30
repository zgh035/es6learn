



//获取全局安装路径
npm root -g
//修改全局安装的路径
npmconfig set prefix __

//node中用于存储二进制数据的缓存区Buffer
//初始化的几种方法
//1
let a = new Buffer(size)
//2,用一个数组进行初始化
let b = new Buffer([1,2,3])
//3,使用一个字符串来初始化，str是要填充的字符串，encode表示字符串的编码规则
let c = new Buffer(str,[encode]);
let b = new Buffer([1,2,3]);
//填充数据的方法,value表示填充的值，start表示开始填充的位置，默认为0，end表示填充结束的位置，默认为Buffer的长度，填充的范围不包括end
a.fill(value,[start],[end]);

//取出buffer类中的某一段数据，使用slice方法
//取出的数据是和源数据共享内存区域，所以一旦修改了截取出的内区区域，那么原来的也会改变

//将buffer中保存的数据转换为字符串的方法,
buf.toString([encode],['start'],['end'])

//buffer也支持使用concat
buf.concat(b1,b2);

//字符串一旦创建了之后就不可以使用数组的方式再来改变他，但是buffer类可以