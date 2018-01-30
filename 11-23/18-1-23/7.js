

let repl = require('repl');

let server = repl.start('>');

server.on('exit',(...arg) => {
    console.log('已经退出repl')
} )

server.on('reset',(context) => {
    context.msg = 1;
    console.log('内容已经全部清理完毕');
});