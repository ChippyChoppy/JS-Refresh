// diff bw var and let keywords
/*
let does not let you declare a variable twice, var does
"use strict" enables strict mode, catches common coding mistakes
*/

//compare scopes of var and let
//var is global
// let is limited to block state or scope it's declared in

function checkScope() {
    "use strict";
    let i = "function scope"; // if we use var here
        // if we comment this out
    if (true) {
        let i = "block scope"; // and just i = "block scope" here
            // and keep this let
        console.log("Block scope  i is: ", i);
    }
    console.log("Function scope i is: ", i); //then we get
            // then we hit an error here because i is not in scope outside of the block
    return i;
}
//Block scope i is: block scope
//Function scope i is: block scope
//using let to declare i in both scopes returns
//Block scope i is: block scope
//Function scope i is: function scope

checkScope()

//mutate array declared with const

const s = [5,7,2]

function editInPlace() {
    "use strict";
    s[0] = 2;
    s[1] = 2;
    s[2] = 56
}
editInPlace()
console.log(s)

//prevent object mutation --> const alone doesn't prevent, so we can use Object.freeze() --> with what we want constant passed as arg

function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);

    try { // try catch block, will try first part of block, if error moves to catch and logs it out
        MATH_CONSTANTS.PI = 99;
    } catch( ex ) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj()
console.log(PI);