// create strings using template literals --> special kind of string that makes creating complex strings easier

const person = {
    name: "Zodiac Hasbro",
    age: 56
};

//Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}! 
I am ${person.age} years old.`;

console.log(greeting);

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
    const resultDisplayArray = [];
    for (let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
    }

    return resultDisplayArray;
}

/**
 * makeList(result.failure) should return:
 * [`<li class="text-warning">no-var</li>`,
 *  `<li class="text-warning">var-on-top</li>`,
 *  `<li class="text-warning">linebreak</li>` ]
 */
const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray)

//write concise object literal declarations using simple fields

const createPerson = (name, age, gender) => ({ name, age, gender });
// return {
//     name: name,
//     age: age,
//     gender: gender
// };
// };
console.log(createPerson("Bex Robbs", 37, "any baby"))

//write concise declarative functions
const bicycle = {
    gear: 2,
    // setGear: function(newGear) {
    //     "use strict";
    //     this.gear = newGear;
    // }
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);

//use class syntax to define a constructor function, 
// this is old way
// let SpaceShuttle = function (targetPlanet) {
//     this.targetPlanet = targetPlanet;
// }
// let zeus = new SpaceShuttle('Jupiter');
// console.log(zeus.targetPlanet)

class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}
let zeus = new SpaceShuttle('Jupiter')
console.log(zeus.targetPlanet)

function makeClass() {
    class Veggie {
        constructor(name){
            this.name = name;
        }
    }
    return Veggie;
};
const Veggie = makeClass();
const carrot = new Veggie('carrot');
console.log(carrot.name);

// use getters and setters to control access to an object

class Book {
    constructor(author) {
        this._author = author;
    }
    //getter
    get writer() {
        return this._author;
    }
    //setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor
    }
}

function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32)
        }
        get temperature() {
            return this._temp;
        }
        set temperature(updatedTemp) {
            this._temp = updatedTemp
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp)

