// import  EventEmitter  from 'events';

let {EventEmitter} = require('events');


let http = require('http');

let server = http.createServer();

server.on('customevent', (...args) => {
    console.log(args);
})


server.emit('customevent',1,2,3,4,5);


console.log(EventEmitter.listenerCount(server,'customevent'));

server.listen(9999);