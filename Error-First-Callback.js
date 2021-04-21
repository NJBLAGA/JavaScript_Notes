//Pass Error first => forced to acknowledge error handling
function doMath(num1, num2, callback) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        const err = new Error("Can only perform math on numbers")
        callback(err)
        return
    }
    callback(null, num1, num2) //null falsey => if statements in below function will not run
}

function add(err, a, b) {
    if (err) {
        return console.error(err.message)
    }
    console.log(a + b)
}

function multiply(err, x, y) {
    if (err) {
        return console.error(err.message)
    }
    console.log(x * y)
}

doMath(2, 5, multiply)
doMath(3, 3, add)

const useName = (name, cb) => {
    if (typeof name !== 'string') {
        const error = new Error("Name must be a string")
        cb(error)
    } else if (name.length < 1) {
        const error = new Error("Name cannot be empty")
        cb(error)
    } else {
        cb(null, name, )
    }
}

const greet = (error, name) => {
    if (error) {
        console.log(error.message)
        return
    }
    console.log(`Hello ${name}!`)
}

useName("", greet)