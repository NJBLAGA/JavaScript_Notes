/*
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
In other words, a closure gives you access to an outer function's scope form an inner function. 
In Javascript, closures are created every time a function is created, at function creation time.
Every closure has 3 scopes:
1.Local Scope(Own scope)
2.Outer Function Scope.
3.Global Scope
*/

// Chain Scope Function
let i = "Is Cool"

function word(a) {
    return function word(b) {
        return function word(c) {
            return a + b + c + i
        }
    }
}
//without anonymous functions
let w = word("Nathan ")
let o = w("James ")
let r = o("Blaga ")
console.log(r)
    //anonymous functions
console.log(word("Nathan ")("James ")("Blaga "))


//Example 1 -----------------------------
let addToo = function(passed) {
    let inner = 2
    return passed + inner
}
console.log(addToo(3))

//Function factory
let addTo = function(passed) { //outer function
        let add = function(inner) { //inner function
            return passed + inner
        }
        return add
    }
    //Both share the same function body definition but store different lexical environments
let addThree = new addTo(3)
let addFour = new addTo(4)

console.log(addThree(2))
console.log(addFour(1))

//Example 2 -----------------------------
function person(name) {
    this.name = name //private variable 
}

let myName = new person("Nathan")

console.log(`My name is ${myName.name}!!!`)

const myLastName = "Blaga" //global function

function printLastName() { //has access to everything outside it (current live value of variable)
    console.log(myLastName)
}
printLastName()

//Example 3 -----------------------------
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable)
        console.log('Inner Variable: ' + innerVariable)
    }
}
const newFunction = outerFunction('outside')
newFunction('inside')

//IIFE =>  Immediately Invoked Function Expressions -----------------------------
//BROWSER ****

// (() => {
//     let a = 20
//     let b = 20
//     var result = a + b
//     console.log(result)
// })()

/*
There are two major parts of the code above: 
The first is the anonymous function contained inside the outer set of parentheses, called the Grouping Operator (). 
This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.
You can try running the code in this example to see how it works.
*/