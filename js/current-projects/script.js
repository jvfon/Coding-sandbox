
function func(x, callback) {
    callback(x);
}

func(10, variable => console.log(variable));