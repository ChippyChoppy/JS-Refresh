// declaring string vars
let name = "alan";
let lastName = 'turing';

let middleName = `badass`;
console.log(name, middleName, lastName)

//double quotes, escape!

let quote = "I am a string, \"quoting someone\", let's escape these inner quotes! "
console.log(quote)

let otherQuote = 'he said, "whoa baby" where is your quote?'
console.log(otherQuote)

let backTicks = `quotes "with apostrophes ma'am"`
console.log(backTicks)

//escaping sequence in strings

/*
 * CODE OUTPUT
 \' single quote
 \" double quote
 \\ backslash
 \n newline
 \r carriage return
 \t tab
 \b backspace
 \f form feed
 */

 let myStr = "First line \n\t\\SecondLine\nThirdLine"
 console.log(myStr)

 //Concat w/ plus operator
 let concatStr = "I'm first" + "I'm second"
 console.log(concatStr)

 let newStr = "This is the start. " + "This is the end."
 console.log(newStr)

 //concat strings w/ += 

 myStr += "\nAnd I come last"
 console.log(myStr)

 concatStr += " Jokes, I'm the end!"
 console.log(concatStr)

 //concat w/ variables
 let becca = "Bex";
 let whoAmI = "I am " + becca + " and I like roller skating"
 console.log(whoAmI)

 let iLike = " and knitting"
 whoAmI += iLike

 console.log(whoAmI)

 // find length of string
 console.log(becca.length)

 //bracket notation to find character in string
 let firstLetter = "";
 firstLetter = becca[0];
 console.log(firstLetter)
 let secondLetter = "";
 secondLetter = becca[1];
 console.log(secondLetter)

 //String immutability - they cannot be altered once created. This doesn't mean they can't be changed, just individual characters of a string literal cannot be changed

 let immute = "Jello World";
 immute[0] = "H" // this does not work!
 console.log(immute) // --> returns "Jello World"
 immute = "Hello World" // this does work!
 console.log(immute) // --> returns "Hello World"

 // bracket notation to find nth character

 console.log(becca[2])

 // last letter
console.log( becca[becca.length - 1])
// 2nd, 3rd, etc. to last
console.log(becca[becca.length-2])
console.log(becca[becca.length-3])

