function sumCallback (a, b, callback){
    callback(a + b);
}

function handleSum(sum) {
    console.log(sum)
}

sumCallback(1, 2, handleSum);

/////////////////////////////////////////////

function sayHello(yourName, callback) {
    callback("Hello " + yourName);
}

function sayHola(texto) {
    console.log(texto);
}

sayHello("Jose", sayHola);

//////////////////////////////////////////////

function house(xcolor, callback) {
    callback(xcolor + " house");
}

function thisColor(house) {
    console.log(house);
}

house("red", thisColor);

///////////////////////////////////////////

function addLetters(x, y, callback) {
    callback(x + y);
}

function addThese(sum) {
    console.log(sum);
}

addLetters("a" + " b", addThese); 

////////////////////////////////////////

function addWords(uno, dos, callback){
    callback(uno + dos);
}

function twoWords(sum){
    console.log(sum);
}

addWords("La " + "guitarra", twoWords);
