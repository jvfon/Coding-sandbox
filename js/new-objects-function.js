/* let myBook = {
   title: '1984',
   author: 'George Orwell',
   pageCount: 326,
}

let otherBook = {
   title: 'A Peoples History',
   author: 'Howard Zinn',
   pageCount: 723,
}

let getSummary = function (book) {
   return { 
      summary: `${book.title} by ${book.author}`,
      pageCountSummary: `${book.title} is ${book.pageCount} pages long.`,
   }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

// ----------------------------------------------------------------------

// ** create a function that returns an object
// ** take farenheight in - return an object with F, C and K

// ** C = (F -32) * (5/9)
// ** K = (F + 459.67) * (5/9)



let cel = (f -32) * (5/9)
let kel = (f + 459.67) * (5/9)

let temp = function(far) {

}

let startFar = far    */


/* let greetUser = function() {
   console.log("Welcome User!")
}

greetUser()

//------------------------------------------------

let squared = function(orgNum) {
   sqNum = orgNum * orgNum
}

let result = squared(2)
console.log(sqNum)

//-----------------------------------------------

/*  let percentage = function(theNum) {
   fraction = theNum / 100
}

let resultPer = percentage(50)
console.log(fraction)    

//--------------------------------------------------

/* let subNum = function(numChoose) {
   minusFive = numChoose - 5
}

let getNum = subNum(45)
console.log(minusFive)   */

//-------------------------------------------------

/* let add = function (a, b) {
   return a + b
}

let result = add(1, 2)
console.log(result)

//------------------------------------------------

let sub = function (d, e) {
   return d - e
}

let subResult = sub(5, 2)
console.log(subResult) 

//--------------------------------------------

let getScoreText = function(name, score) {
   return 'Name: ' + name + ' Score ' + score
}

let scoreText = getScoreText('Joe', 100)
console.log(scoreText)

//-----------------------------------------

let keepScore = function(name, score) {
   return 'Name: ' + name + ' Score: ' + score
}

let top = keepScore('Will', 120)
console.log(top) 

//----------------------------------------

let addingNumbers = function(a, b) {
   formula = a + b
}

let theNumbers = addingNumbers(1, 9)
console.log(formula)  

//------------------------------------------

let getTemps = function(farenheit) {
   initialTemp = farenheit
   cels = (farenheit -32) * (5/9)
   kel = (farenheit + 459.67) * (5/9)
   return {

   }
}

let useThisTemp = getTemps(32)
console.log(cels)
console.log(kel)
console.log(initialTemp)  

//-----------------------------------------

let tempFarenheit = {
   cold: 0,
   warm: 85,
   hot: 95,
}



let startTemp = function(farenheit) {
   cels = (farenheit -32) * (5/9),
   kel = (farenheit + 459.67) * (5/9),  
   return {
      celsTemp: `When Farenheit  ${tempFarenheit.cold}`,
   }
}

console.log(celstemp)  



let myBook = {
   title: '1984',
   author: 'George Orwell',
   pageCount: 326,
}

let otherBook = {
   title: 'A Peoples History',
   author: 'Howard Zinn',
   pageCount: 723,
}

let getSummary = function (book) {
   return { 
      summary: `${book.title} by ${book.author}`,
      pageCountSummary: `${book.title} is ${book.pageCount} pages long.`,
   }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)  */

//-------------------------------------------

let convertFahrenheit = function(fahrenheit) {
   return { // ** creating an object here
      fahrenheit: fahrenheit, // ** fahrenheit property gets its value from the fahrenheit argument
      kel: (fahrenheit + 459.67) * (5/9), 
      cel: (fahrenheit - 32) * (5/9),
   }
}

let temps = convertFahrenheit(74)
console.log(temps)





