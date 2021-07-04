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
    if (wasThatTrue) {
        return "yes, that was true";
    }
    return "no, that was false";
}
console.log(trueFalse(true))

//comparison w/ equality operator

function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(testEqual("12"))

function strictEqual(val) {
    if (val === 7) {
        return "equal"
    }
    return "nope";
}

console.log(strictEqual("7"))

//inequality operator

function notEqual(val) {
    if (val != 99) {
        return "not equal"
    } return "equal"
}
console.log(notEqual("99"))

//strict inequality
function strictInequal(val) {
    if (val !== 17) {
        return "nope";
    }
    return "equal";
}

console.log(strictInequal(16))

//comparisons w/ logical operators <, >, <=, >=
function testGreater(val) {
    if (val > 100) return "over 100";
    if (val > 10) return "over 10";
    else return "less than 10"
}
console.log(testGreater(1))
console.log(testGreater(13))
console.log(testGreater(101))

// && operator

if (val <= 50 && val >= 25) {
    return "yes"
}

// || or operator
if (val < 10 || val > 20) return "outside"

// if else

if (val > 5) return "bigger than 5"
else return "5 or smaller"

// else if statements
function elseIfs() {
    if (val > 10) return "greater than 10";
    else if (val < 5) return "smaller than 5"
    else return "between 5 & 10"
}