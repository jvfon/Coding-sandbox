function watchFace(color, callback){
    callback("which watch face color? " + color);
}

watchFace("white", function(var1){
    console.log(var1);
})
///////////////////////////////////////////
function choco(late, callback){
    callback("Hersheys? " + late);
}

choco("yes", function(var2){
    console.log(var2);
})
