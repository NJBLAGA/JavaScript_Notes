console.log("Hello World!")
    // terminal.puts Hello, World!

try {
    // try block
    throw "This is an error"
        // Rasing/throwing an exception - can be any datatype
} catch (e) {
    // transfer to catch block if any exception occurs 
    console.log(`Error: ${e}`)
} finally {
    console.log('finally!')
        // clean up - such as closing a file
}



function subtract(num1, num2) {
    let answer

    try {
        answer = num1 - num2
        if (isNaN(answer)) {
            throw "Invalid input"
        }
        return answer
    } catch (e) {
        console.log(`Error: ${e}`)
    }
}

console.log(subtract(20, "Hello"))