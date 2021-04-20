Array.prototype.average = function() {
    let sum = 0
    for (let i = 0; i < this.length; i++) {
        sum += this[i]
    }
    return sum / this.length
}

exampleA = [2, 4, 6]

console.log(exampleA.average())


const add = () => {
    return `Hello `
}

console.log(add())

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const countDown = array => {
    for (let i = array1.length; i > 0; i--) {
        console.log(`T-minus ${i} seconds...`)
    }
    console.log("BLAST OFF!!!!")
}

console.log(countDown(array1))

i = 0
x = 0

do {
    x += i
    console.log(x)
    i++
} while (i < 5)