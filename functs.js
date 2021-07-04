function functName() {
    console.log("this is a function");
}

functName()

const myFunc = () => {
    console.log("did it")
}

myFunc()
myFunc()
myFunc()
myFunc()

const argFuncs = (a, b) => {
    console.log(a * b)
}
argFuncs(1, 5)
argFuncs(3, 7.4)

const moreArgs = (a, b) => {
    console.log(a + b)
}
moreArgs("Hey", " you")
moreArgs(1, 3)

//global scope and functions --> refers to visibility of variables, outside of function blog, available everywhere, or globally

let global = "whole world";

function fun1() {
    oopsGlobal = "whoopsie" // by not using let/const this automatically becomes global despite being in a function, eh, but maybe not? Maybe JS fixed this...???
}

function fun2() {
    let output = "";
    if(typeof global != "undefined") {
        output += "global: " + global;
    }
    if(typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal
    }
    console.log( output)
}
fun1()
fun2()

//local scope and functions

function localScope() {
    let myVar = 5;
    console.log(myVar);
}
localScope();
// console.log(myVar);

//global vs local in functions, possible to have local and global with same name, local takes precedent over global

let outerWear = "T-shirt";
function myOutfit() {
    let outerWear = "sweater";
    return outerWear;
}
console.log(myOutfit());
console.log(outerWear)

// return a value from a function with return 
function minusSeven(num) {
    return num - 7;
}

console.log(minusSeven(10));

function timesFive(num){
    return num * 5;
}

console.log(timesFive(47))

//undefined value returned from a function

let sum = 0;
function addThree() {
    sum = sum + 3;
}
console.log(addThree())

// assignment with a returned value
let changed = 0;
function change(num) {
    return (num + 5) / 3;
}

changed = change(10)
console.log(changed)

//stand in line --> a queue is an abstract data structure where items are kept in order

function nextInLine(arr, item) {
    arr.push(item)
    return arr.shift();
}

let testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));