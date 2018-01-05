

let http = require('http');


let test = (...arg) => {
    console.log(arg)
    http.createServer( (req,res) => {
        res.writeHead(200,{'Content-Type' : 'text/html'});
        res.end('test');
    }).listen('8888');
    console.log('服务已经启动');
};


setTimeout( test ,3000, [1,2,3,4,5]) ;

t2.unref();
clearInterval(t3)

.break;