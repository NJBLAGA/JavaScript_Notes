// function add(...args) {
//     return args.reduce((acc, cur) => acc + cur)
// }

// // const subtract = (num1, num2) => {
// //     return num1 - num2
// // }

// // const divide = (num1, num2) => {
// //     return num1 / num2
// // }

// // const multiply = (num1, num2) => {
// //     return num1 * num2
// // }
// function calculate(callback) {
//     return callback(...args)
// }

// // function calculateTwo(a, b, c, callback1, callback2) {
// //     let step1 = callback1(a, b)
// //     return callback2(step1, c)
// // }

// // function calculateThree(a, b, c, d, callback1, callback2, callback3) {
// //     let step1 = callback1(a, b)
// //     let step2 = callback2(c, d)
// //     return callback3(step1, step2)
// // }

// // console.log(calculate(2, 2, 2, 2, 2, 2, 2, 2, add))
// // console.log(calculate(2, 2, subtract))
// // console.log(calculate(2, 2, divide))
// // console.log(calculate(2, 2, multiply))
// // console.log(calculateTwo(2, 2, 2, add, multiply))
// // console.log(calculateTwo(2, 2, 2, 2, add, add, multiply))


// console.log(calculate(2, 2, 2, 2, 2, 2, 2, 2, add))