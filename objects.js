// similar to arrays, but instead of indexes to access you use properties (keys) and values (after the colon)

let ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

let myDog = {
    "name": "Duo",
    "legs": 2,
    "tails": 0,
    "friends": []
}

// dot notation
let nameVal = myDog.name;
console.log(nameVal);
let legsVal = myDog.legs;
console.log(legsVal);