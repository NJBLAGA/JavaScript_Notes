//Spread Operators:

// add the elements of an existing array into a new array
let certToAdd = ['Alogrithms and Data Structures ', 'Front End Libraries']
let certifications = ['Repsonsive Web Design', ...certToAdd, 'Data Visualisation', 'APIs and Micoservices', 'Quality Assurance and INformation Security']
console.log(certifications)

// pass elements of an array as arguments ot be a function
function addThreeNumbers(x, y, z) {
    console.log(x + y + z)
}
let args = [0, 1, 2]
addThreeNumbers(...args)

//copy arrays
let arr = [1, 2, 3]
let arr2 = [...arr] // like arr.slice()
arr.push(4)
console.log(arr)
console.log(arr2)

//concatenate arrays
let arr3 = [0, 1, 2]
let arr4 = [3, 4, 5]
    // arr3.concat(arr4) => one way
arr3 = [...arr3, "Hello World!", "Nathan", ...arr4] // => spread operator way, can also add new elements into the array
console.log(arr3)

//Rest Operators:
//REST: condense multiple elements into an array
function multiply(multiplier, ...theArgs) { // First element = multiplier, in this case 2. then function takes 2 and * by each element in the array through map.
    return theArgs.map(function(element) {
        return multiplier * element
    })
}
let arr5 = multiply(2, 1, 2, 3)
console.log(arr5)