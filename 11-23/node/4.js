


let http = require('http');

let server = http.createServer();
//修改最多可以绑定的事件处理函数数量
server.setMaxListeners(10);

// server.on('request',function (req,res) {
//     console.log(req.url);
//     res.end(Math.random() + '');
// });

// server.addListener('request', (req,res) => {
//     console.log(req.url);
//     res.writeHead(500,{'Content-Type' : 'text/html'});
//     res.end(Math.random() + '');
// });

let func=  (req,res) => {
    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.end('once执行完毕');
};

server.on('request', func);

//解除某个事件的处理函数
server.removeListener('request',func);

//解除事件绑定的所有函数
server.removeAllListeners('request');

// console.log(server.listeners('request'))

server.listen('8888','127.0.0.1');