//Special characters can be encoded using escape sequences:
/*

\0	null character 
\'	single quote 
\"	double quote 
\\	backslash 
\n	newline 
\r	carriage 
\v	vertical tab 
\t	tab 
\b	backspace 
\f	form feed 

*/

let string = "Hello World!"

string.length // Find length of a string
console.log(string.indexOf("l")) //Find the index of a certain character inside a given string
string.slice(2) //=>"llo World" // Creates new string with sliced off string
string.toLowerCase //Changes all characters in string to upp case
string.toUpperCase //Changes all characters in string to lower case
console.log(string.replace('World', 'Nathan'))
let testJoin = ['Hello', ' ', 'World'].join('')
console.log(testJoin) // => 'Hello World'
console.log(['a', 'b', 'c'].join())
let stringOne = 'Hello '
let stringTwo = "World!!!!"
let stringThree = stringOne.concat(stringTwo)
console.log(stringThree)
console.log(typeof string)


//TYPEOF METHOD:
/*
Undefined => "undefined"
Null =>	"object" (see below)
Boolean => "boolean"
Number => "number"
BigInt => "bigint"
String => "string"
Symbol => "symbol"
Function object => "function"
Any other object =>	"object"
*/
function type(value) {
    if (typeof value === "string") {
        console.log("This is a string")
    } else if (typeof value === "number") {
        console.log("This is a number")
    } else if (typeof value === "boolean") {
        console.log("This is a boolean")
    }
}

console.log(type("Hello"))
console.log(type("1"))
console.log(type(5))
console.log(type(true))