


let test = () => {
    if(module === require.main) {
        console.log('it is a main')
    }else{
        console.log('not a main js ')
    }
}

if(module === require.main) {
    console.log('it is a main')
}else{
    console.log('not a main js ')
}

exports.test = test;
