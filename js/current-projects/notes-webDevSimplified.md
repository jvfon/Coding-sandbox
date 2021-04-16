# Index
[Variable Types](#Variable_Types)
[Normal Functions](#Normal_Functions)

## Variable Types
### Numbers

```js
let a = 1;
```
To check what type of variable number 1 is do the following:
```js
console.log(typeof a);
```

When you add two floats you might get rounding errors. 
```js
let a = 1.2;
let b = 2.2;

console.log(a+b);
```
The answer you get is: 3.4000000000004

This is not always the case with other operations but you need to be aware of this possibility.

### Escape

let a = "john says \"Hi\"";

### Boolean
&& = "and"  
```js
let a = true;
let b = false;

console.log(true && a);
```
if true and a, then it's true.  
if true and b, then it's false.  

|| = "or"
```js
let a = true;
let b = false;

console.log(true || b);
```
if true or b, then it's true.  

```js
console.log(false &&(false || true));
```
false or(||) true = true  
false and(&&) true = false  


### Invert a boolean
! = "not"
```js
let happy = true;
console.log(!happy);
```
You can put two !'s and they will cancel eachother out.
```js
console.log(!!happy);
```

### Null and Undefined
For variables with no value.

```js
let a = undefined;

console.log(typeof a);

let a;

console.log(typeof a);
```
When you give variable a value of "undefined", it's like saying that the variable doesn't have a value yet.  

It is the same as not giving a variable a value. You get the same result when you console.log the variable or the "typeof" for the variable.  

```js
let a = null;

console.log(typeof a);
```
On the other hand, when you give the value of "null" to a variable, you are specifically saying that the variable has no value.  

### Comparing variables
```js
let a = 1;
let b = 2;

console.log(a == b);
```
The double = sign is used to tell if two variables have the same value.  

So:
= =  means "equal".  
! = means "not equal".  
&& means "and".  
|| means "or".  

### Comparing Strings
```js
let a = 'a';
let b = 'b';

console.log(a < b);
```
You get "true" because string values are sorted out alphabetically.  

### Garbage Collecting
Taking variables you no longer use and removing them from the memory of the computer.  

As the program is running, it will delete the variable it no longer needs.  

## Normal Functions
A function is like a variable that contains the definition of a function.  

```js
function sayHi() {
    
}
```
function: use this word to create a function.  
sayHi: use camel case to name a function.  
(): put inside what type of info the function can take.  
{}: put inside the thing the function will do.  

To call a function, type the name of the function followed by (). Inside the () is where you pass info to the function.
```js
sayHi();
```

### Error Messages
"Uncaught sytax error" and "unexpected identifier" mean that part of your code is misconfigured.  

### Functions that take info(arguments)
A function that takes two arguments to perform addition.  
```js
function sum(a, b) {

}
```   
Inside the () are the names of the info you want to pass to the function.  

A and b are parameters (or arguments) and they are like variables.  

```js
function sum(a, b) {
    console.log(a + b);
}
```  
To add a and b you need to give a value to each expression.  
```js
function sum(a, b) {
        console.log(a + b);
}

sum(1, 2);
```  

You can also use variables to pass in information.  
```js
function sum(a, b) {
    console.log(a + b);
}

let x = 1;
let y = 2;

sum(x, y);
```

The thing with parameters is that we are giving a name to the thing we are passing as the first part of the function and the same with the second part of the funcition.  

### Not passing a value
If you write:
```js
function personsName(n) {
    console.log(n);
}

personsName();
```
and not pass a value to console log, you will get "undefined" as a result.  

If you have more than 1 value and only pass one value, the 2nd or 3rd values will output "undefined".  

### Returning a value that we can use
```js
function sum(a, b) {
    return a + b;
}

let s = sum(1, 2);
console.log(s);
```  
Instead of putting "console.log" inside the function use the word "return" to return a value that you can use. Anything after "return" will be outputted from the function. 

```js
function sum(a, b) {
    return a + b;
}

sum(1, 2);
```
Here nothing gets printed but you get a value that you can use.  


If you add the variable "s", then that variable will be equal to the sum a + b.
```js
function sum(a, b) {
    return a + b;
}

let s = sum(1, 2);
```

Put "sum" a value of a variable, then output the value.  

You can re-use the variable "s".
```js
function sum(a, b) {
    return a + b;
}

let s = sum(1, 2);
let sum2 = sum(s, 2);
console.log(sum2);
```

### Return "Hello" with a name
My solution: 
```js
function n(say) {
    return say;
}

let s = n("Hello");
let s2 = (s + " Jose");
console.log(s2);
```

Instructor solution:
```js
function sayHi(name) {
    return "Hello " + name;
}

let result = sayHi("Jose");
console.log(result);
```

### Passing a function as an argument
```js
function printVariable(variable) {
    console.log(variable);
}

console.log(printVariable);
```

What you will see on the console is the definition of the function.  

You have a variable that has the definition of the function inside of it.  

When the "function" keyword is used, it creates a variable for you with that name(printVariable) and the variable(printVariable) contains the definition of the function inside of it.  

You can pass the variable (the original function) which is the function definition to another new function and use it inside the new function.  

```js
function printVariable(variable) {
    console.log(variable);
}

function func(x) {
    x("Hello World");
}

func(printVariable)
```
Passing the function (printVariable) itself. Passing literally ```console.log(variable);```.  

Passing the variable "variable" to the function "func" and mapping "variable" to the "x" variable.  

Call "func" by using parenthesis ```x("Hello World");```, then pass the "Hello World" value.  

The function "func" is getting the variable "printVariable", remapping to "x" and calling that with "Hello World" which essentially calls the function "printVariable" and passes out the text "Hello World".  

A function that passes another function is called a callback function.  


# Callback function
```js
function sumCallback (a, b, callback){
    callback(a + b);
}

function handleSum(sum) {
    console.log(sum)
}

sumCallback(1, 2, handleSum);
```

The function sumCallback passes two arguments and takes in a function which it is called with the result of adding the two values (arguments) together.  

The second function handleSum (the callback function) will take in the sum from the function sumCallback.  

Call the function sumCallback, pass 2 values (1 and 2) and pass in the function handleSum 

Exercise:  
Create a function that takes 2 parameters and it prints "Hello Jose"

My solution:  
```js
function twoParameters(c, callback){
    callback("Hello " + c)
}

function twoLetters(sum){
    console.log(sum);
}

twoParameters("Jose", twoLetters);
```

Instructor's solution:
```js
function printVariable(variable){
    console.log(variable);
}

function printName(name, callback) {
    callback("Hello " + name);
}

printName("Jose", printVariable);
```

## Anonymous Function 
Since callback functions are used so common, JS allows us to write anonymous functions. 

Anonymous functions are function written without a name inside where we run a function to callback another function.  

```js
function printVariable(variable){
    console.log(variable);
}

function printName(name, callback) {
    callback("Hello " + name);
}

printName("Jose", printVariable);
```

to:
```js
function printName(name, callback) {
    callback("Hello " + name);
}

printName("Jose", function (variable) {
    console.log(variable);
})
```
Calling the function printName, passing one argument and an anonymous function. Passing a function where it's being used.  

A function is like a variable that contains the definition of a function.  

# Arrow Function
A normal function
```js
function sum(a, b){
    return a + b;
}

console.log(sum(1, 2));
```

### How an arrow function is built:
```js
let sumArrow = (a, b) => {
    return a + b;
}

console.log(sumArrow(1, 2));
```
The keyword "let" is used instead of the keyword "function".  
Then the equal "=" sign is used.  
Put the "=" sign with the ">" in between the parenthesis and curly brackets.  
So, "run these parameters" through this function".  

When there is only one argument, function parentheses can be left off.
```js
let printName = name => {
    console.log(name);
}

printName("Jose");
```  

Regular function arrow:
```js
let sumArrow = (a, b) => {
    return a + b;
}

console.log(sumArrow(1, 2));
```

You can also leave off the curly braces and the keyword "return" and put everything in one line.  
```js
let sumArrow = (a, b) => a + b;


console.log(sumArrow(1, 2));
```
When you put in an arrow function a single line of code without parenthesis, it will return whatever you put for the arguments.  

The reason to use arrow function is to pass functions to other functions and write less code.  

Example regular function:
```js
function func(x, callback) {
    callback(x);
}

func(10, function(variable){
    console.log(variable);
})
```

Arrow function: 
```js

function func(x, callback) {
    callback(x);
}

func(10, variable => console.log(variable));
```

# Debugging
When the browser finds an error, it outputs a "stack trace" in the console tab where the location of the errors are presented from the "inside out".  

The most inside function where the error occurred is shown first and the last error shown is the most outer function where the error began.  

### Code stack
On the source tab, click on the pause button near the bottom of the page. If you refresh the browser will pause when it encouters and error.  

Below there, you will see the "call stack". You don't necessarily need an error to see it. It allows you to see what's going on in your function.  

If you don't have an error, on the "source" tab, click on one of the lines of code to create a "break point". When you run the code, it will pause the code and you will be able to see exactly what is happening. Resave and the code will stop at the break point and you will see what is going on on that line on the call stack.  

You can use additional functions like the down arrow (step into function) to further examine the function.  

# Hoisting
JS programs run from top to bottom. You need to declare variables before using them, etc. With functions is different, before a program is run, all the functions are gathered and assumed to be on top of everything else.  

Hosting doesn't work with arrow functions because they are defined as variables.  

# Scoping
Script scope: Variables declared inside a function are only accessible inside that function.  

Global scope: Variables declared outside a function are accessible anywhere in the program, including inside any function.  

Curly braces create a new scope.  

# Closure
A function inside another function.  

Ex:
```js
let a = 1;

function print() {
    console.log(a);
}

let a = 2;

print();
```
As long as the variable "a" is reassigned a new value before the function is called, the new value will be the output.  

A typical closure:
```js
function print(variable) {

    return function func(variable2) {
        console.log(variable);
        console.log(variable2);
    }
}

let a = print(1);
a(2);
```

# Variables - Const
You can't redefine a variable once it's been defined with const.  

Syntax:
```js
const a = 1;
console.log(a);
```
If you think the value of a variable will change use "let", otherwise use "const".  

# Variables - Var
Syntax:
```js
var a = 1;
console.log(a);
```
Unusual behavior with "var", it allows hoisting.  

Variables defined with "var" are available outside of their scope. Avoid using "var" to declare variables.   

# Type coercion
Converting a type to another type.  

### Explicit type coercion: 
Converting a string to an integer.  
```js
let a = "1";
parseInt(a);

console.log(a);
```

Converting a number to a string:
```js
let a = 1.34;

console.log(a.toString());
```

### Implicit type coercion.
The computer is coverting a type to another type for you.  
ex:
```js
let a = 1;
const b = "Hi ";
console.log(b + a);
```
When you use "+", a string is converted to a number.

```js
let a = 1;
const b = "Hi ";
console.log(b - a);
```
When you use "-", a number is converted to a string.  

# Check for equality

Use 3 equal signs "===". It tells JS to compare types without type coercion.

```js
const a = "";
const b = false;

console.log(a === b);
```

You can also add another "=" when you use "!=", otherwise JS will use type coercion and two types that are not equal will come up as equal. The extra "=" sign tells JS to not change the types.
```js
const a = "";
const b = "1";

console.log(a !== b);
```

# NaN
To check if something is not a number don't do this:
```js
const a = "asdfasdf";

console.log(parseInt == NaN);
```
It will output "false" because NaN is never equal to anythig.  

Do this to check if something is NaN:
```js
const a = parseInt("asdfasdf");

console.log(isNaN(a));
```
It will outpu as true.  

# Array
Basic syntax:
```js
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```
The elements start at position zero "0";

### Access the elements inside the array:
```js
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(a[0]);
```
Use square brackets and put the index number inside.  

### Add an element inside the array
Use "a.push();"

a = the array
push = function
() = what you want to the array 

```js
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

a.push(11);

console.log(a);
```
Push adds an element at the end of the list.  

You can add strings or anything you want with "push".  

You can put an array inside another array:
```js
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

a.push(11);
a.push(["hi", "bye"])

console.log(a);
```

### Nested arrays
```js
const a = [["hi", "bye"], [1, 2]];

console.log(a);
```

To access the elements inside a nested array:
```js
const a = [["hi", "bye"], [1, 2]];

console.log(a[0][0]);
console.log(a[1][0]);
```
### The length of the array
```js
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(a.length);
```

# Objects
A collection of elements related to each other in some way.  

To create an object use curly brackets.  
```js
let car = {carBrand: "subaru", color: "green", carType: "sedan"}
```
Inside the curly brackets, a key-value pair go inside.

carBrand = the key  
subaru = the value  

To get a single property of an object:
```js
let car = {carBrand: "subaru", color: "green", carType: "sedan"}

console.log(car.carBrand);
```

### Add a Function to an object
```js
let car = {
    carBrand: "subaru", 
    color: "green", 
    carType: "sedan",
    sayHi: function () {
        console.log("Hi");
    }
}
console.log(car.color);
car.sayHi();
```
To get the value from each property, use console.log.  
To call out a function, don't use console.log.  

sayHi is the property.  

The function doesn't have to have a name because is declared by "sayHi".  

Another way to add a function:
```js
let car = {
    carBrand: "subaru", 
    color: "green", 
    carType: "sedan",
    sayHi: function () {
        console.log("Hi");
    },
    sayHi2() {
        console.log("Hi");
    }
}

car.sayHi();
```
Put "( )" after the property and then add the curly braces.  

### Another way to access different properties
```js
console.log(car.color);
```
Instead of the dot notation to identify properties, you can also use brackets "[]".  
Put a string to identify the property.  
```js
let car = {
    carBrand: "subaru", 
    color: "green", 
    carType: "sedan",
    sayHi: function () {
        console.log("Hi");
    },
    sayHi2() {
        console.log("Hi");
    }
}

console.log(car["color"]);
```
But don't use this technique unless you have a variable named "property".  
```js
const property = "make"

console.log(car["property"]);
``` 

### An object inside another object
```js
let person = {
    name: "Joe",
    hobbies: ["Programming", "Music", "Hiking"],
    address: {
        street: "123 Main St.",
        city: "Newport"
    }
}

console.log(person.hobbies[1])
console.log(person.name)
```

### Modify properties inside an object
```js
let person = {
    name: "Joe",
    hobbies: ["Programming", "Music", "Hiking"],
    address: {
        street: "123 Main St.",
        city: "Newport"
    }
}

person.name = "Mark";

console.log(person.name)
```
Use dot notation to access the property and then use "=" sign to assign a new value.

## Reference vs Value

When you give a variable a value, the actual value of the variable is saved in memory.  

When you create an object or array, the values in the object and array are identifiers of a location in memory. The address(location) equates to a scpecific value.  

If you have array c and array d is equal to array c, then both of them share the same location in memory.  

If you modify array d, then array c is also changed since both array c and array d share the same location in memory.  

If you compare two arrays with the same value, they will come out as "false".  
```js
let a = [1, 2];
let b = [1, 2];

console.log(a === b);
```
The output will be "false" because both arrays are in located in different memory locations.  

The only time you need to worry about is when you try to redifine an array and/or an object because you will be trying to change where the memory location.  



































































