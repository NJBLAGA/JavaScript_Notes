//Ed Callback Functions Challenge 1
let greetings = ["hello", "goodbye", "hey", "bye"]

function capitalise(strings) {
    let x = strings
    let newArray = x.map(i => {
        return i.charAt(0).toUpperCase() + i.slice(1)
    })
    console.log(newArray)
}

function capitaliseFirst(strings, callback) {
    callback(strings)
}

console.log(capitaliseFirst(greetings, capitalise))

//Ed Callback Functions Challenge 2
let list = ["Nathan", 16, "Nicole", 4]
    // isNumber 
    // Return true if value has a number data type
function isNumber(value) {
    let y = value
    let newList = y.filter(i => {
        if (typeof i === "number") {
            return i
        }
    })
    console.log(newList)
}

// getTheNumbers
//   Parameter: list
//      An array of different kinds of data (numbers, strings, etc)
//   Returns an array that only contains the numbers from list
// Use filter and isNumber to return all the numbers in list
function getTheNumbers(value, callback) {
    callback(value)
}

console.log(getTheNumbers(list, isNumber))

//Ed Callback Functions Challenge 2
let sortList = ["Nathan", "Maria", "Alex", "Tom"]
    // shortToLong
    // Used to sort objects by length (like arrays or strings) 
    // Returns
    // 	positive number if the length of val1 is bigger than val2
    //  negative number if the length of val2 is bigger than val1
    //  0 if the length of both objects is equal
function shortToLong(value) {
    let z = value
    let newZ = z.sort()
    console.log(newZ)
}
// shortestToLongest
// Parameter: list
//		An array of strings or other arrays of varying lengths
// Returns the array with values sorted by length, shortest to longest
// Use sort and shortToLong to return the elements in list ordered by length
function shortestToLongest(value, callback) {
    callback(value)
}

console.log(shortestToLongest(sortList, shortToLong))