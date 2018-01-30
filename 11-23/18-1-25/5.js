

let buf = Buffer.from('hello world');


let json = JSON.stringify(buf);

console.log(JSON.parse(json))

console.log(Buffer.from(JSON.parse(json)).toString());