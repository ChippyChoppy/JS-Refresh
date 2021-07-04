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
