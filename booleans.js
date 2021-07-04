// data type, only 2 values, true (on) or false (off)

function oohBools() {
    return false;
}
console.log(oohBools())

//conditional logic w/ if statements --> used to make decisions in code, 
function trueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "Nope, it's false";
}
console.log(trueOrFalse(13))
function trueFalse(wasThatTrue) {
    if(wasThatTrue) {
        return "yes, that was true";
    }
    return "no, that was false";
}
console.log(trueFalse(true))

//comparison w/ equality operator

function testEqual(val) {
    if(val == 12) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(testEqual("12"))

function strictEqual(val){
    if (val === 7) {
        return "equal"
    }
    return "nope";
}

console.log(strictEqual("7"))