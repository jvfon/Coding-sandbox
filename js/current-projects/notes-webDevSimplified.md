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

### Normal Functions
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
Instead of putting console.log inside the function use the word "return" to return a value that you can use.  

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

The variable that has the definition of the function inside of it.  

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

The function "func" is getting the variable "printVariable", remapping to "x" and calling that with "Hello World" which essentially 













































