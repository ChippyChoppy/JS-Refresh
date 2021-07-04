let thisArray = ["heck", "yeah", "i", "love", "an", "array", "!"]
console.log(thisArray.join( " " ))

let anotherOne = ["Becca", 13]
console.log(anotherOne)

// arrays of arrays oh my!
let arrArr = [["ooh", "this"], ["is", "an"], ["array of", "arrays"]]

console.log(arrArr[0])

//access array with index
let numArr = [50,60,70]
let numData = numArr[0];

let numsArr = [1,2,3,4]
let findNum = numsArr[3]
console.log(findNum)

// modify arrays with index --> can't do it with a string, but can with an array!

numArr[3] = 45;
console.log(numArr)

numsArr[0] = 1000
console.log(numsArr)

// access multi-dimensional arrays w/ indexes

let newArrArr = arrArr[0][1]
console.log(newArrArr)
newArrArr = arrArr[2][1]
console.log(newArrArr)

// .push append to end of array
arrArr.push(["oops", "more"])
console.log(arrArr)

// .pop remove from end of array
arrArr.pop()
console.log(arrArr)

// .shift remove first element of array
arrArr[0].shift()
console.log(arrArr)

// .unshift adds to front of array
arrArr[0].unshift("ooh")
console.log(arrArr)

//shopping list
let myList = [["ceral", 2], ["milk", 1], ["bananas", 15], ["juice", 1], ["eggs", 13]]