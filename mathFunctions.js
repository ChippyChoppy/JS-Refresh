//generate random fractions --> random fraction between 0 and 1

function randomFraction() {
    return Math.random();
}
console.log(randomFraction())

//create random whole number

let randomNum0to19 = Math.floor(Math.random() * 20);
// math.floor rounds down to nearest whole num
// math.ceil rounds up to nearest whole num
console.log(randomNum0to19)
function randomWholeNum() {

    return Math.floor(Math.random() * 10)
}

console.log(randomWholeNum())

//generate random whole w/in range

function randomRange(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomRange(45,47))

//parsInt takes string and returns integer, returns NaN if not a number

function convertToInteger(str) {
    return parseInt(str)
}

console.log("13")

function radixToInt(str) {
    return parseInt(str, 2);
}

console.log(radixToInt("10011"))

// ternary operator one line if/else expression
// condition ? if true : if false

function checkEqual(a,b) {
   return a === b ? "same same" : "dif"
}

console.log(checkEqual(2,2))
console.log(checkEqual("2", 2))

// multiple/nested ternaries

function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

console.log(checkSign(0))