function sumCallback (a, b, callback){
    callback(a + b);
}

function handleSum(sum) {
    console.log(sum)
}

sumCallback(1, 2, handleSum);