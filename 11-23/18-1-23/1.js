


let a = 1;


//正真返回给require地方是module.exports而不是exports
//exports只不过是一个辅助工具，exports只是module.exports的一个应用
//如果module.exports重新复制，那么exports将被忽略，所以有一个初始化的方法exports = module.exports = {};
//确保exports和module.exports是相同的引用
module.exports = {};

exports.a = a;