// global scope
this.table = 'window table'

// function for global (needs call function below)
cleanTable = function(soap) {
        const innerFunction = function(_soap) {
            console.log(`cleaning ${this.table} using ${soap}`)
        }
        innerFunction.call(this, soap) // call or bind
        innerFunction.bind(this)(soap) // call or bind
    }
    //best option is to use fat arrow(as below:)

cleanTable = (soap) => {
    const innerFunction = function(_soap) {
        console.log(`cleaning ${this.table} using ${soap}`)
    }
    innerFunction.call(this, soap) // call or bind
    innerFunction.bind(this)(soap) // call or bind
}


this.garage = {
    table: 'garage table',
    cleanTable(soap) { // => method
        console.log(`cleaning ${this.table} using ${soap}`)
    }
}

//object
class createRoom {
    constructor(name) {
        this.table = `${name}s table`
    }
    cleanTable = function(soap) { // => method
        console.log(`cleaning ${this.table} using ${soap}`) // using prototype
    }
}

const jillsRoom = new createRoom('jill')
const johnsRoom = new createRoom('jill')

//call function for global
cleanTable.call(this, 'some soap')
    //call function for object
cleanTable.call(this.garage, 'some soap')
jillsRoom.cleanTable('lots of soap')
johnsRoom.cleanTable('some amounts of soap')

let name = prompt("What is your name")
console.log(prompt("What is your name?"))
console.log("Your name is ${name}")