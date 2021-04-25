//Syntax that can extract data arrays and objects into distinct variables

//  Assign variables from objects
let voxel = { x: 3.6, y: 7.4, z: 6.54 }
const { x, y, z } = voxel
console.log(x)
    //or
const { x: a, y: b, z: c } = voxel
console.log(b)

//  Assign variables from nested objects
const nest = {
    start: { x: 5, y: 6 },
    end: { x: 6, y: -9 }
}

let { start: { x: startX, y: startY } } = nest

console.log(startX)

//  Assign variables from arrays
const [q, r] = [1, 2, 3, 4, 5]
console.log(q, r)
const [j, , , u] = [1, 2, 3, 4, 5] // ,,, skips elements in the array, so y = 1, then ot skips 2 and 3, and u = 4
console.log(j, u)

//  Rst Operator to Reassign Array Elements
const [i, o, ...rest] = [1, 2, 3, 4, 5]
console.log(q, r) //  q, r = first 2 elements in the array
console.log(rest) // rest = the remaining elements in the list, and only works if it is the last variable in the list

//Pass an Object as a function's Parameters
const profileUpdate = ({ name, age, nationality, location }) => {
    // do something with these variables

}