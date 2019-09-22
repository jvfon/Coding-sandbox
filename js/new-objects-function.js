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

let startFar = far




































































