

const  test = require('./4.js');

test.on('ready',() => {
    console.log('模块已经准备号');
    console.log(require.cache[require.resolve('./4.js')].loaded);
});
console.log(require.cache[require.resolve('./4.js')].loaded);