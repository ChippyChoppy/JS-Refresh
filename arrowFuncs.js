// use arrow funcs to write concise anonymous functions

const magic = () => new Date();

console.log(magic())

// arrow funcs w/ params

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1,2],[3,4,5]))

// higher order arrow functions (map, filter, reduce) --> whenever a function takes another function as an arg, that's a good time for an arrow func
const numberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]

const squareList = (arr) => {
    const squaredInt = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredInt;
}

const squaredInt = squareList(numberArray)
console.log(squaredInt)

//write higher order arrow funcs
const increment = (function() {
    return function increment(number, value = 1) {
        return number + value;
    };
})();
console.log(increment(5,2));
console.log(increment(5));

// use rest operator w/ func params ... is the rest operator

const sum = (function() {
    return function sum(...args) { // before when passing in x,y,z we could only pass in 3 args, with ... we can pass in however many args we need!
        return args.reduce((a,b) => a + b, 0);
    };
})();
console.log(sum(1,2,3,4,5,8)); 

//use the spread operator to evaluate arrays in place
// looks just like rest operator, ...

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
    // arr2 = arr1; 
    arr2 = [...arr1]; //this spreads out content of arr1 into new arr2
    arr1[0] = 'potato'
})();
console.log(arr2)
console.log(arr1)

