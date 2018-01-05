

let user = new Object();
user.name = 'test';
user.getName = function () {
    return this.name;
}
console.log(user)