

let http = require('http');

let server = http.createServer();


//当server上添加了新事件，会触发该事件
//绑定removeListener也会触发newListener事件
server.on('newListener', (e,f) => {
    console.log(e)
});

//当server上移除了事件，会触发该事件,

server.on('removeListener', (e,f) => {
    console.log(e);
});


server.on('request',(req,res) => {
    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.end('test');
});
server.listen(8888);