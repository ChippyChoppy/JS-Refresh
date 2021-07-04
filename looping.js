//while loops
let myArray = [];

let i = 0
while( i < 5) {
    myArray.push(i);
    i++
}

console.log("while", myArray)

//for loops
let ourArr = [];

for(let i = 0; i < 5; i++) {
    ourArr.push(i);
}

let arrArr = [];

for(let i = 0; i <= 8; i++) {
    arrArr.push(i*2);
}

console.log(arrArr)

//iterate odd nums w/ for loop
let oddArr = []
for (let i = 1; i < 10; i +=2) {
    oddArr.push(i);
}
console.log(oddArr)

//iterate through array w/ for

let anArr = [1,2,3,4,5];
let aTotal = 0;

for(let i = 0; i < anArr.length; i++) {
    aTotal += anArr[i];
}

console.log(aTotal)

// nesting for loops
function multiplyAll(arr) {
    let product = 1;

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j]
        }
    }
    return product
}

let product = multiplyAll([[1,2], [3,4],[5,6,7]]);

console.log(product)

// iterate with do ... while loops

let myArr = [];
let dowhile = 10;

while(dowhile < 5) {
    myArr.push(dowhile);
    dowhile++;
}
console.log(dowhile, myArr)
do { // by moving while to end and using do, this block of code will happen at least once
    myArr.push(dowhile);
    dowhile++;
} while (dowhile < 5) // now this is false, so break out of loop

console.log(dowhile, myArr)