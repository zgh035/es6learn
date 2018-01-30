

let fs = require('fs');

fs.readFile('../test.txt',{
    encoding : 'base64',
    flag : 'r',
    mode : '0777'
},(err,data) => {
    console.log(data.toString('utf8'))
});