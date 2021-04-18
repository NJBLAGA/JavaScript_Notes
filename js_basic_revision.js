let ourArray = [
    [2, 3, 4, "Hello"],
    ["World", 1, 5, 6]
]
ourArray.push([":)", 7, 8], [10, 11, 12])
console.log(`${ourArray[0][3]}, ${ourArray[1][0]}...${ourArray[2][0]}`)
console.log(ourArray.pop())
console.log(ourArray)
console.log(ourArray.shift())
console.log(ourArray)

let myList = [
    ["milk", 3],
    ["apple", 5],
    ["juice", 2],
    ["eggs", 12]
]

let myGlobal = 10
let fakeNum = 1

function pickOurList(a, b) {
    let fakeNum = 5
    let add = a + b + myGlobal + fakeNum
    return add
}

function testTest(a, b) {
    let add = a + b + myGlobal + fakeNum
    return add
}

console.log(pickOurList(1, 1))
console.log(testTest(1, 1))


function isItRaining(ans1, ans2) {
    let rain = ans1
    let temp = ans2
    let raining = "It's raining... ".repeat(3)
    let notRaining = "It's not raining... ".repeat(3)
    return rain === true && temp <= 10 ? raining : notRaining
}

console.log(isItRaining(true, 9))

function testSwitch(val) {
    num = val
    switch (num) {
        case 1:
            return "a"
            break
        case 2:
            return "b"
            break
        case 3:
            return "c"
            break
        default:
            return "Thats not one of the possible answers"
    }
}

console.log(testSwitch(3))

let ourDetails = {
    "firstName": "Nathan",
    "lastName": "Blaga",
    "age": 31,
    "likes": "lifting",
}
ourDetails["favCol"] = "Blue"
delete ourDetails.age
console.log(ourDetails)


function lookUP(val) {
    let result = ""
    let lookUp2 = {
        1: "one",
        2: "two",
        3: "three"
    }
    result = lookUp2[val]
    return result
}

console.log(lookUP(1))

let lookUp2 = {
    1: "one",
    2: "two",
    3: "three"
}

const checkIf = (object) => {

    return lookUp2.hasOwnProperty(1) === true ? "yay" : "nay"
}
console.log(checkIf(lookUp2))

let myStorage = [
    car = {
        "col": "red",
        "year": "1990"
    },
    table = {
        "col": "brown",
        "year": "1989"
    }
]
console.log(myStorage[1].col)

let myArray = [1, 2, 3, 4, 5]
    //While loop
let i = 6
while (i < 10) {
    myArray.push(i)
    i++
}
console.log(myArray)
    //Do While loop
do {
    myArray.push(i)
    i++
} while (i < 10)

console.log(myArray)
    //For loop
for (let i = 6; i <= 15; i++) {
    myArray.push(i)
}
console.log(myArray)


let myArray2 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10]
]

//Nested For loop
let product = 0
for (let i = 0; i < myArray2.length; i++) {
    for (let j = 0; j < myArray2[i].length; j++) {
        product += myArray2[i][j]
    }
}
console.log(product)

console.log(Math.floor(Math.random() * 10) + 1)

function convertToInteger(str) {
    return parseInt(str, 2)
}
console.log(convertToInteger("10011"))

const apple = 12345
Object.freeze(apple)

const times = (num1, num2) => num1 + num2

console.log(times(2))

let details = { name: { nathan: 1, nicole: 2, joshua: 3 }, col: { blue: 4, red: 5, green: 6 } }

const { col: { red: a } } = details

console.log(a)