// largest.js

// return the largest number from the array
// return null for empty array
// ignores non-numeric values
// throws an error if what's being passed isn't an array
function largestNumber(arr) {
    // your code here
    newArray = arr
    let largest = newArray[0] || null
    let currNumber = null
    if (!Array.isArray(newArray)) {
        throw new Error("Function must take array")
    } 
       for (let i = 0; i < newArray.length; i++) {
            if (isNaN(newArray[i])) {
                currNumber = null
            } else {
                currNumber = newArray[i]
            }
                largest = Math.max(largest, currNumber)  
        }
    
    return largest
   
}
  
  module.exports = largestNumber