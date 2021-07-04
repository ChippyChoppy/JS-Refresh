let contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "coding", "brownies"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "123",
        "likes": ["Hogwarts", "Magic", "Ginny"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "2334",
        "likes": ["murder", "mystery", "intrigue"]
    }
]

function lookUpProfile(name, prop) {
    for(let i = 0; i < contacts.length; i++) {
        if(contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property";
        }
    }
    return "no such person, no such name"
}

let data = lookUpProfile("hello", "lastName");

console.log(data)