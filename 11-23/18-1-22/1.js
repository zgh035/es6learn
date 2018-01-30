

let repl = require('repl');

//开启服务器的repl环境，并指定context为指定上下文
let context = repl.start();

// context.msg = 1;

context.on('exit', () => {
    console.log('Received "exit" event from repl!');
    process.exit();
  });

//将repl环境中的变量都保存到一个文件当中
// .save
