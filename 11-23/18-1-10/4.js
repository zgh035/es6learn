//import会提升到整个模块的头部，首先执行
b();
//如果在运行的状态下b发生变化，那么这里也会发生变化
import {b} from './module'

//一次性导入所有方法并且取别名为test
import * as test from './module'

//import引入的变量时静态分析的，所以不允许运行时改变，
test.a = 1;
test.b = function () {}

//导入module里的模块，最后再导出
export {b} from './module'