


// let http = require('http');

// http.createServer( (req,res) => {
//     res.writeHead(200,{'Content-Type' : 'text/html'});
//     res.end('test');
// } ).listen('8888','127.0.0.2');


let repl = require('repl');
let con = repl.start().context;
con.msg = '私立小时';
con.testFunc = function () {
    console.log(con.msg)
};
