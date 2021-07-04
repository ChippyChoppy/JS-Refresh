// use destructuring assignment to assign variables from objects
let voxel = {x: 3.6, y: 7.4, z: 6.54};

let x = voxel.x;
let y = voxel.y;
let z = voxel.z;

const {x : a, y : b, z : c } = voxel;


const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict"

    const {tomorrow : tempOfTomorrow} = avgTemperatures;

    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES))

//destructuring assignment w/ nested objects

const LOCAL_FORECAST = {
    today: {min: 72, max: 83},
    tomorrow: {min: 73.3, max: 84.6}
};

function getMaxOfTmrw(forecast) {
    "use strict";
    const { tomorrow: {max : maxOfTomorrow}} = forecast;


    return maxOfTomorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST))

//use destructuring assignment to assign variables from arrays

const [p, q, , r] = [1,2,3,4,5,6];
console.log(p, q, r);

let m = 8, g = 6;
(() => {
    "use strict";
    [m,g] = [g,m]
})()
console.log(m);
console.log(g)

//use destructuring assignement with the rest operator

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    
    const [ , , ...arr] = list;

    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

// use destructuring assignment to pass an object as a function's parameters

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function() {
    return function half({max, min}) {
        return (max + min) / 2.0;
    };
})();
console.log(stats);
console.log(half(stats));

