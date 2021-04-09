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


let addLine = join(",how are you today? ")
// console.log(greeting("Hello Nathan! "))
console.log(addLine("Hello Nathan! "))

function mario(numberOfRows) {
    printedNumber = 1
    while (printedNumber <= numberOfRows) {
        console.log("#".repeat(printedNumber))
        printedNumber +=1
    }
}

console.log(mario(4))

function mario(numberOfRows) {
    printedNumber = 1
    while (printedNumber <= numberOfRows) {
        console.log(" #".repeat(printedNumber))
        printedNumber +=1
    }
}

console.log(mario(4))

// ------------------------------------------------------------------
// Week 2

