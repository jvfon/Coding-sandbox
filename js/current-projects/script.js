function watchFace(color, callback){
    callback("which watch face color? " + color);
}

watchFace("white", function(var1){
    console.log(var1);
})
///////////////////////////////////////////
