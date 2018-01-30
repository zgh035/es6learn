

let repl = require('repl');

repl.start({
    prompt : '#',
    input : false,
    // eval (cmd,context,filename,callback) {
    //     console.log(filename)
    // },
    //
    writer (output) {
        console.log(output)
        return 'a'
    }
});