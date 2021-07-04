let coolbeans = 'pintos'; // in-line comment
console.log(coolbeans)
/* Whoa
a multi-line
comment
fancy pants */

/* Data Types: anything meaningful to the computer
undefined (something that hasn't been defined), null (nothing), boolean (true/false), string (text), symbol (immutable primitive value that is unique), number (a number), object (stores key:value pairs)

variable - like a box you fill with any data you want
*/
var name = "first"; // used throughout whole program

let myName = "Bex"; // only used in the scope where declared
myName = "Rebex";

const yourName = "cool"; // variable can't and won't ever change, trying to change const = error

let a; // declaring a variable
console.log(a)

let b = 2 // assigning a variable
console.log(b)
a = 7 // assigning 

b = a // assigning
console.log(a, b)
console.log
coolbeans = 'turtle'

console.log(coolbeans)

// uninitialized variables
let z; // = 5
let y; // = 10
let x; // = "I am a"

// Case Sensitive
let StuDlYCapvAr // these are not the same!
let STUDLYCAPVAR

let camelCase = "this is how we do it"

//adding
let sum = 10 + 10
console.log(sum)

//subtracting
let minus = 8 - 15
console.log(minus)

//multiplication
let multiply = 15 * 13
console.log(multiply)

//divide
let quotient = 66/33
console.log(quotient)

//increment
let newVariable = 87
newVariable++
console.log(newVariable)

//decrement
newVariable--;
console.log(newVariable)

//decimal numbers
let aDecimal = 8.9
let thisDecimal = 7.6

let product = 2.0 * 2.7
console.log(product)

//divide decimals
let divide = 2.7/1.3
console.log(divide)

//remainder
let remainder = 11 % 3
console.log(remainder) //often used to determine if # is even or odd

//compound assignment with augmented addition, subtraction, multiplication
let ab = 3;
let bc = 13;
let cd = 45;

ab = ab + 15;
bc = 78 + bc;
cd = 3 + cd;
console.log(ab, bc, cd)
ab += 15;
bc += 78;
cd += 3;
console.log(ab, bc, cd)
ab -= 15;
bc -= 78;
cd -= 3;
console.log(ab, bc, cd)
ab *= 2;
bc *= 15;
cd *= 10;
console.log(ab, bc, cd)
ab /= 2;
bc /= 15;
cd /= 10;
console.log(ab, bc, cd)

