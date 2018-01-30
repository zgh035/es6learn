
console.log('a starting');
module.exports = {
    done : false
}
// exports.done = false;
const b = require('./b.js');
console.log('in a, b.done = %j', b.done);
module.exports = {
    done : true
}
console.log('a done');
