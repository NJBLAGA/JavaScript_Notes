let array = [0, 1, 5, 2, 4, 3]

let newArray1 = array.map(x => x * 2) // => array with elements * by 2
let newArray2 = array.sort() // => sorts the array from smallest to largest
let newArray3 = array.filter(x => x >= 3)

console.log(newArray1)
console.log(newArray2)
console.log(newArray3)