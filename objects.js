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

// bracket notation --> can be used anytime, but required when key has a space in it
let dogName = myDog["name"];
console.log(dogName)

// accessing object properties with variables

let playerObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

let playerNumber = 16;
let player = playerObj[playerNumber]
console.log(player)

// Updating object properties

myDog.name = "scoot scoot"
console.log(myDog.name)

myDog.speak = "arf arf"

console.log(myDog)

ourDog['speak'] = "woof"
console.log(ourDog)

// delete properties

delete ourDog.speak
console.log(ourDog)

// using objects to look up
function phoneticLookup(val) {
    let result = "";

    let lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago"
    }
    result = lookup[val]
    return result;
    // switch (val) {
    //     case "alpha":
    //         result = "Adams";
    //         break;
    //     case "bravo":
    //         result = "Boston";
    //         break;
    //     case "charlie":
    //         result = "Chicago"
    //         break;
    // }
}
console.log(phoneticLookup("charlie"))

// testing object for properties

function checkObj(checkProp) {
    if (myDog.hasOwnProperty(checkProp)) {
        return myDog[checkProp];
    } else {
        return "not in object"
    }
}
console.log(checkObj("name"))

//manipulating complex objects

let myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "realease_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Britney Spears",
        "title": "Baby One More Time",
        "realease_year": 1999,
        "formats": {
            "CD": true,
            "casette": true,
            "8T": false,
            "LP": false,
            "YouTube": true 
        },
        "gold": true
    }
]

// accessing nested objects

let musicFormats = myMusic[1].formats["CD"]
console.log(musicFormats)

//Accessing nested arrays

let nestArr = myMusic[0].formats[2]
console.log(nestArr)