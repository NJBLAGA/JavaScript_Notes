// Week 1
const greeting = (words) => {
    string = words
    return string.repeat(4)
}

function join(a) {
    return function(b) {
        return b + a
    }
}
"------------------------------------------------"
let addLine = join(",how are you today? ")
    // console.log(greeting("Hello Nathan! "))
console.log(addLine("Hello Nathan! "))

"------------------------------------------------"

function mario(numberOfRows) {
    printedNumber = 1
    while (printedNumber <= numberOfRows) {
        console.log("#".repeat(printedNumber))
        printedNumber += 1
    }
}
"------------------------------------------------"
console.log(mario(4))

function superMario(numberOfRows) {
    printedNumber = 1
    spaces = numberOfRows
    while (printedNumber <= numberOfRows) {
        console.log(" ".repeat(spaces) + "#".repeat(printedNumber * 2))
        printedNumber += 1
        spaces -= 1
    }
}

console.log(mario(4))
console.log(superMario(16))
"------------------------------------------------"
// Week 2

//Morning challenge - mutability madness! For each, answer the question. Try thinking about it in your head, then running the code to see if you were right.
"------------------------------------------------"
// Eg 1 - pass primitive value to function
let number = 2

function doubleIt(number) {
    number = number * 2
}

// call the doubleIt function with our number
doubleIt(number)

// question - did the value of number change? why or why not?
console.log(number)
"------------------------------------------------"
// Eg 2 - pass object to function
let numbers = [1, 2, 3]

function doubleThem(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = numbers[i] * 2
    }
}
// call the doubleThem function with our numbers array
doubleThem(numbers)

// question - did the value of numbers change? why or why not?
console.log(numbers)
"------------------------------------------------"
// eg 3 - forEach loop
// create an array
let coolArray = [1, 2, 3]

// loop over it with forEach, and try to change each element
// fat arrow version
coolArray.forEach(element => element = element * 2)

// regular function version
coolArray.forEach(function(element) {
        element = element * 2
    })
    // Question - Is coolArray [1, 2, 3] or [2, 4, 6]? Why? Hint: it's the same situation as Eg1
    // Extension Q - If you wanted to mutate (modify) coolArray, how could you do it?
console.log(coolArray)
"------------------------------------------------"
// Morning challenge:

// Capitalise the Front
// Create a function that will take a string as an argument. In this function, use your favourite loop to capitalise the first letter of each word, whilst making each other letter lowercase

// Write the tests first!

// E.g. capitaliseTheFront("sinGLE"), should return "Single"

// E.g. capitaliseTheFront("TWO words"), should return "Two Words"

// E.g. capitaliseTheFront("Quite a Long SENTENCE!"), should return "Quite A Long Sentence!"
"------------------------------------------------"
// import { areAnagrams } from './index.js'

// describe("anagram checker", () => {
//   test("It checks if two strings are anagrams of each other", () => {
//     expect(areAnagrams("silent", "listen")).toBe(true)
//     expect(areAnagrams("silent", "giraffe")).toBe(false)
//   })

//   test("It can handle multi-word strings", () => {
//     expect(areAnagrams("rail safety", "fairy tales")).toBe(true)
//   })
// })
"------------------------------------------------"