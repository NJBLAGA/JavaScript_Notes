function useName(input, callback) {
    if (typeof input !== 'string') {
        const error = new Error("Name must be a string")
        callback(error)
    } else if (input.length < 1) {
        const error = new Error("Name cannot be empty")
        callback(error)
    } else {
        callback(null, input)
    }
}

function greet(error, input) {
    if (error) {
        console.log(error.message)
        return
    }
    console.log(`Hello ${input}`)
}

useName('Nathan', greet)