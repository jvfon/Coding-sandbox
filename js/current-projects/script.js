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

addLetters("a", " b", addThese); 

////////////////////////////////////////

function addWords(uno, dos, callback){
    callback(uno + dos);
}

function twoWords(sum){
    console.log(sum);
}

addWords("La ", "guitarra", twoWords);






function iLike(watch, callback){
    callback(watch);
}

function brand(watchBrand){
    console.log(watchBrand + " watches");
}

iLike("Seiko", brand);


function wakeUp(time, callback){
    callback(time);
}

function hour(hora){
    console.log(hora + "am");
}

wakeUp("5:00", hour);















function addWord(word, callback) {
    callback(word + " and two");
}

function aWord(addOne) {
    console.log(addOne);
}

addWord("one", aWord);

function twoParameters(c, callback){
    callback("Hello " + c)
}

function twoLetters(sum){
    console.log(sum);
}

twoParameters("Jose", twoLetters);

//////////////////////////////////////////
function printVariable(variable){
    console.log(variable);
}


function printName(name, callback) {
    callback("Hello " + name);
}

printName("Jose", printVariable);
























