function processInput(input, callback) {
    callback(input)
}

function greet(name) {
    console.log(`Hello ${name}`)
}

function excitedGreet(name) {
    console.log("HI THERE " + name.toUpperCase() + " !!!")
}
processInput("Nathan", greet)
processInput("Nathan", excitedGreet)


//Math functions
function add(a, b) {
    console.log(a + b)
}

function multiply(x, y) {
    console.log(x * y)
}

function doMath(num1, num2, callback) {
    console.log("Processing...")
    callback(num1, num2)
}

doMath(21, 3, function(one, two) {
    console.log(one / two)
})

doMath(2, 5, (a, b) => {
    console.log(a ** b)
})

console.log(doMath(10, 10, add))
console.log(doMath(10, 10, multiply))

// String Modifiers
const modifySentence = (sentence, modifier) => {
    return sentence.split(" ").map(modifier).join(" ")
}

const capitalise = (word) => {
    return word[0].toUpperCase() + word.substring(1)
}

const noCovid = (word) => {
    return word.toLowerCase() === 'covid19' ? '#####' : word
}

console.log(modifySentence("hello there friend!", capitalise))
console.log(modifySentence("COVID19 is a big problem", noCovid))

//Array Methods
// Higher Order Function => Array Methods/Functions => Callback

//forEach
const people = ["Nathan", "Joshua", "Nicole", "Ghita", "Maria"]

function logger(element) {
    console.log(element)
}
people.forEach((person, index) => console.log(`${index + 1}. ${person}`))

//Map
const numbers = [1, 2, 3, 4, 5]

const addOne = number => number + 1

const double = num => num * 2

console.log(numbers.map(double))

//Filter
const lessTanFive = word => word.length > 5
const equalToFive = word => word.length === 5
console.log(people.filter(lessTanFive))
console.log(people.filter(equalToFive))

//Reduce
const reducer = (accumulator, currentValue) => accumulator + currentValue
console.log(numbers.reduce(reducer))