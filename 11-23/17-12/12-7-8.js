



// class foo {
    
//     static zghtest () {
//         return 'hello';
//     }

//     abc () {
//         return 'abc';
//     }
// }


// class fooChild extends  foo {
//     static zghtest () {
//         //子类静态方法可以调用父类的静态方法，这里的super指代的是父类
//         return super.zghtest() + 'world';
//     }

//     abc () {
//         //这里的super指代的是父类的实例对象
//         return super.abc() + 'aaa';
//     }
// }

// //类的静态属性
// fooChild.ak = 1;

// console.log(fooChild.zghtest());

// let test = new fooChild();
// console.log(test.abc());

// class MyClass {
//     myProp;
//     static myStaticProp = 42;
//     constructor() {
//     this.myProp = 1;
//     }
//   }