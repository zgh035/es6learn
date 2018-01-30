
let a = 1;

const EventEmitter = require('events');

module.exports = new EventEmitter();

setTimeout(() => {
    module.exports.emit('ready');
},3000);