// dice.js
function dice(value) {
    // return a number from 1-6
    // your code goes here
    return Math.ceil(Math.random() * value) 
  }

console.log(dice(6))
  
  module.exports =  dice 