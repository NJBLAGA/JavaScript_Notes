/*
let myName = "Nathan"
console.log(`Hello, ${myName}!`)
console.log("Hope you are having a nice day!")


function addNumbers(a, b) {
    c = a + b
    if (!isNaN(c) && c % 2 === 0) {
        console.log(`The answer = ${c}, which is an even number.`)
    } else if (!isNaN(c) && c % 2 !== 0) {
        console.log(`The answer = ${c}, which is an odd number.`)
    } else {
        console.log(`a and b need to be numbers, please try again!`)
    }
}
console.log(addNumbers("hello", 2))

function petSounds(pet) {
    switch (pet) {
        case "dog":
            console.log(`My pet ${pet} goes WOOF WOOF!`)
            break
        case "cat":
            console.log(`My pet ${pet} goes MEOW MEOW!`)
            break
        case "bird":
            console.log(`My pet ${pet} goes TWEET TWEET!`)
            break
        case "snake":
            console.log(`My pet ${pet} goes HISS HISS!`)
            break
        default:
            console.log(`I have never heard of a ${pet} as a pet before?`)
    }
}
console.log(petSounds("dog"))



let i = 0
while (i < 5) {
    console.log("Hello, World!")
    i++
}

let i = 5
do {
    console.log(`T-minus ${i} seconds!`)
    i--
}
while (i >= 1)
console.log(`Blast-Off !!!!`)


let friendsNames = ["Tom", "Steve", "Jerry"]
for (let i = 0; i < friendsNames.length; i++) {
    console.log(`${friendsNames[i]} is one of my Best Friends!`)
}


Tom is one of my Best Friends!
    Steve is one of my Best Friends!
    Jerry is one of my Best Friends!

    12 + " " // "12" -> JavaScript converts the 12 into a string type, allowing it to add the two strings together.
"12" * 2 // "30" -> JavaScript converts the 15 into a number type, allowing it to multiply the two numbers together.
    "10" - 2 // "8" -> JavaScript converts the 10 into a number type, allowing it to subtract the two numbers together.
undefined + 6 // NaN -> JavaScript  cannot convert undefined into a number type, resulting in the output not being a number.
null + 5 // 5 -> JavaScript can convert null to a number type which equates to 0, resulting in 0 + 5
    "Hello" + null // “Hellonull” -> JavaScript converts null into a string type and combines both strings together.
true + true // 2 -> JavaScript converts both true and true to their number type (binary) which equates to 1.
10 * [5] // 50 -> JavaScript converts the 5 within the array into a number type.

String(25) // "25" -> JavaScript converts the 25 from a number type to a string type of "25".
String([]) // "" as [] -> JavaScript converts the [] from an empty array to a string type of empty string "".
String(true) // "true" -> JavaScript converts the true from a boolean type to a string type of "true".


Number("334") // 334 -> JavaScript converts the "334" from a string type to a number type of 334.
Number(false) // 0 -> JavaScript converts the false from a boolean type to a number type of 0.
Number(null) // 0 -> JavaScript converts the null number type of 0.

parseInt("22.2") //22 -> JavaScript converts the "22.2" into a number type of 22.
parseFloat("22.2") //22 -> JavaScript converts the "22.2" into a number type of 22.2.


Boolean(32) //true -> JavaScript converts the 32 from a number type to a boolean type of true.
Boolean(null) //false -> JavaScript converts null to a boolean type of false.
Boolean("Hello World!") //true -> JavaScript converts the string of "Hello World!" to a boolean type of true.

-
false
    -
    0 -
    -0 -
    On -
    "", '', `` -
    null -
    undefined -
    NaN
document.all -
    &&


    let pear = 45
let pearTwo = typeof(pear)
console.log(pearTwo)

//Strings -> Strings are used to store textual data, strings are surrounded by quotes in three different formats:
"Hello World!"
'Heya!'
`Goodbye!`
//Numbers -> Can represent either integers or floating-point numbers. 
56 //Integer
34.5 //Floating-point number
// Numbers can also represent +Infinity, -Infinity, and NaN(Not a Number):
const number1 = 3 / 0;
console.log(number1); // -> Infinity

const number2 = -3 / 0;
console.log(number2); // -> -Infinity

const number3 = "abc" / 3;
console.log(number3); // -> NaN
//BigIn -> An integer with arbitrary precision, the number data type can only represent numbers less than (2^53 - 1) and more than -(2^53 - 1), 
//BigIn can represent values outside these parameters.
900719925124740998 n;
//Boolean -> Logical data type which can either be true or false, often used to decide which block of code is to be executed within a conditional statement.
2 + 2 === 4 //true
3 + 3 === 5 //false
    //Undefined -> Assigned to variables that have not been initialised.
let apple
console.log(apple) //-> undefined
let apple = 2
console.log(apple) //-> defined -> 2
    //Symbol -> A data type assigned to instances that are unique in nature and immutable.
let myName1 = Symbol("Nathan")
let myName2 = Symbol("Nathan")
Console.log(myName1) //-> Symbol(Nathan)
Console.log(myName2) //-> Symbol(Nathan)
    //Although myName1 and myName2 both represent the same value, due to them being of the symbol data type, both variables house a unique instance of that value.
    //This can be shown below:
myName1 === myName2 // -> false




// Object - > Are complex data types that store collections of data.
// The below object friends contains nested objects.
// As demonstrated below, objects can contain multiple primitives of strings, numbers, booleans and more.
const friends = {
    friendOne: {
        firstName: "Stan",
        lastName: "Smith",
        favColor: "Red",
        age: 24,
        married: true
    },
    friendTwo: {
        firstName: "Kane",
        lastName: "Jane",
        favColor: "Blue",
        age: 28,
        married: false
    }
}
console.log(friends.friendTwo.age) // -> 28


let arr = ['Blue', 'Red', 'Green', 'Orange', 'Yellow']

let arrTwo = arr.pop()

console.log(arrTwo)

let number = null
console.log(number) // -> null

let weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
let humpDay = weekdays[2] // -> Target index 2
console.log(humpDay) // -> Wednesday


let fruits = ['apple', 'orange', 'pineapple', 'pear']
console.log(fruits) // -> [ 'apple', 'orange', 'pineapple', 'pear' ]
toString() // -> "Converts an array to a string" (Ayodeji 2019).
console.log(fruits.toString()) // -> apple,orange,pineapple,pear
join() //-> "Combines all array elements into a single string" (Ayodeji 2019).
console.log(fruits.join()) // -> apple,orange,pineapple,pear
concat // -> "Combines two arrays together or can add more elements to an array" (Ayodeji 2019).
let colors = ['red', 'blue', 'green']
console.log(fruits.concat(colors)) // -> [ 'apple', 'orange', 'pineapple', 'pear', 'red', 'blue', 'green' ]
push() // -> "Adds item(s) to the end of an array and changes the original array" (Ayodeji 2019).
let newFruits = fruits.push('lemons')
console.log(fruits) // -> [ 'apple', 'orange', 'pineapple', 'pear', 'lemons' ]
pop() // -> "Removes the last item of an array and returns it" (Ayodeji 2019).
console.log(fruits.pop()) // -> lemons
shift() // -> "Removes the first item of an array and returns it" (Ayodeji 2019).
console.log(fruits.shift()) // ->  apple
unshift() // -> "Adds an item(s) to the beginning of an array" (Ayodeji 2019).
fruits.unshift('melon')
console.log(fruits) // -> [ 'melon', 'orange', 'pineapple', 'pear' ]
splice() // -> "Changes an array, by adding, removing and inserting elements" (Ayodeji 2019).
fruits.splice(1, 0, 'passionfruit')
console.log(fruits) // -> [ 'melon', 'passionfruit', 'orange', 'pineapple', 'pear' ]
slice() // -> "Copies a given part of an array and returns that copied part as a new array (argument reflects index in which to copy elements from). " (Ayodeji 2019).
console.log(fruits.slice(2)) // -> [ 'orange', 'pineapple', 'pear' ]
indexOf() // -> "Looks for an item in an array and returns the index where it was found else it returns -1" (Ayodeji 2019).
console.log(fruits.indexOf('pineapple')) // -> 3
lastIndexOf() // -> "Looks for an item from right to left and returns the last index where the item was found" (Ayodeji 2019).
console.log(fruits.lastIndexOf('pear')) // -> 4
filter() // -> "Creates a new array -> if the items of an array pass a certain condition" (Ayodeji 2019).
console.log(fruits.filter(fruit => fruit.length < 5)) // -> [ 'pear' ]
map() // -> "Creates a new array by manipulating the values in an array" (Ayodeji 2019).
let newNewFruits = fruits.map(fruit => fruit.concat('...!'))
console.log(newNewFruits) // -> ['melon...!','passionfruit...!', 'orange...!', 'pineapple...!','pear...!']
reduce() // -> "Calculates a single value based on an array" (Ayodeji 2019).
let numbers = [1, 2, 3, 4, 5]
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(numbers.reduce(reducer)) // -> 15
forEach() // -> "Iterates through an array, it applies a function on all items in an array" (Ayodeji 2019).
fruits.forEach(fruit => console.log(`I have a ${fruit}`)) // -> 
    // I have a melon
    // I have a passionfruit
    // I have a orange
    // I have a pineapple
    // I have a pear
every() // -> "Checks if all items in an array pass the specified condition and return true if passed, else false" (Ayodeji 2019).
let lotto = [33, 45, 64, 73, 21]
const belowTwenty = (currentValue) => currentValue > 20
let highNumbers = lotto.every(belowTwenty)
console.log(highNumbers) // -> true (all values are above 20)
some() // -> "Checks if an item (one or more) in an array pass the specified condition and return true if passed, else false" (Ayodeji 2019).
const evenNumbers = (currentValue) => currentValue % 2 === 0
let evenLotto = lotto.every(evenNumbers)
console.log(evenLotto) // -> false (not all lotto elements are even)
includes() // -> "Checks if an array contains a certain item" (Ayodeji 2019).
console.log(fruits.includes('pear')) // -> true (fruits array contains 'pear')


// let  Object -> Are complex data types that store collections of data.
//  The below object friends contains nested objects.
//  As demonstrated below, objects can contain multiple primitives of strings, numbers, booleans and more.

const friends = {
    friendOne: {
        firstName: "Stan",
        lastName: "Smith",
        favColor: "Red",
        age: 24,
        married: true
    },
    friendTwo: {
        firstName: "Kane",
        lastName: "Jane",
        favColor: "Blue",
        age: 28,
        married: false
    }
}
console.log(friends.friendTwo.age) // -> 28
console.log(friends["friendTwo"]["age"]) // -> 28

friends.friendTwo.age = 25
console.log(friends) // OUTPUT ->

{
    friendOne: {
        firstName: 'Stan',
        lastName: 'Smith',
        favColor: 'Red',
        age: 24,
        married: true
    },
    friendTwo: {
        firstName: 'Kane',
        lastName: 'Jane',
        favColor: 'Blue',
        age: 25,
        married: false
    }
}


Object.create() // -> Object.create() methods creates a new object, using an existing object as the prototype.
let book = {
    title: "Hello World",
    pages: 2345,
    published: 2003
}
newBook = Object.create(book)
newBook.title = "Goodbye World"
newBook.pages = 3454
newBook.published = 2004
console.log(newBook) // -> { title: 'Goodbye World', pages: 3454, published: 2004 }

Object.values() // -> "Object.values() is a method that returns an array of an object's own property values" (Boceanu 2020).
console.log(Object.values(friends)) // ->
    [{
        firstName: 'Stan',
        lastName: 'Smith',
        favColor: 'Red',
        age: 24,
        married: true
    }, {
        firstName: 'Kane',
        lastName: 'Jane',
        favColor: 'Blue',
        age: 28,
        married: false
    }]

Object.keys() // -> "Object.keys() is a method that returns an array of an object's own property names" (Boceanu 2020).
console.log(Object.keys(friends))['friendOne', 'friendTwo']

Object.freeze() // -> "The method Object.freeze freezes an object" 
    // // -> "A frozen object can’t be changed. It prevents properties from being added and removed,"
    // // -> "It also prevents the values of properties from being changed - unless it’s an object"(Boceanu 2020).
console.log(Object.freeze(friends))
    // // -> Can check if the object is frozen by using .isFrozen():
console.log(Object.isFrozen(friends)) // -> true

Object.seal() // -> "Object.seal is a similar method to Object.freeze()" 
    // // -> "It prevents you from adding or deleting properties of an object,"
    // // -> "but you can change the value of an existing property" (Boceanu 2020).
console.log(Object.seal(friends))
    // // -> Can check if the object is frozen by using .isSealed():
console.log(Object.isSealed(friends)) // -> true

Object.entries() // -> Object.entries() method returns an array consisting of enumerable property [key, value] pairs
let objectNumbers = {
    a: 1,
    b: 2,
    c: 3
}
for (const [key, value] of Object.entries(objectNumbers)) {
    console.log(`${key} is the key for the value: ${value}.`);
}

Object.assign() // -> "The Object.assign method copies the properties of source objects to a target object"(Boceanu 2020).
let newFriend = {
    friendThree: {
        firstName: "Mary",
        lastName: "Stew",
        favColor: "Green",
        age: 22,
        married: false
    }
}
let NewFriends = Object.assign(friends, newFriend)
console.log(NewFriends) // -> 
    {
        friendOne: {
            firstName: 'Stan',
            lastName: 'Smith',
            favColor: 'Red',
            age: 24,
            married: true
        },
        friendTwo: {
            firstName: 'Kane',
            lastName: 'Jane',
            favColor: 'Blue',
            age: 28,
            married: false
        },
        friendThree: {
            firstName: 'Mary',
            lastName: 'Stew',
            favColor: 'Green',
            age: 22,
            married: false
        }
    }


{
    "first_name": "Tommy",
    "last_name": "Lee",
    "married": false
}

let tommy = {
    "first_name": "Tommy",
    "last_name": "Lee",
    "married": false
}

alert(tommy.last_name)

let family = [{
    "first_name": "Tommy",
    "last_name": "Lee",
    "married": false
}, {
    "first_name": "Katie",
    "last_name": "Lee",
    "married": true
}]

let siblings = family[1]["married"]
console.log(siblings)

alert(tommy.last_name)

let tommy = {
    "first_name": "Tommy",
    "last_name": "Lee",
    "married": false
}

let newTommy = JSON.stringify(tommy) // OUTPUT -> '{"first_name" : "Tommy", "last_name" : "Lee", "married" : "false"}'

let oldTommy = JSON.parse(newTommy) // OUTPUT ->
    {
        "first_name": "Tommy",
        "last_name": "Lee",
        "married": false
    }

// Using the keyword class, a class object named car is created.
class Car {
    //The constructor function is a special method used to create and initialise an object (and instance of a class).
    //The below constructor creates the object "brand" as an instance of the car class. 
    constructor(brand) {
            //By invoking the "this" keyword, the newly created object is referenced.
            //The "this" keyword sets the current instance object of brand to a variable/attribute named carname.
            // When the constructor is called, the newly created object will be the returned value.
            this.carname = brand;
        }
        // The below present() function is created. The function is called on the class instance created above.
        // It utilises the carname object created above.
    present() {
        // When the present() function is called, the below string will be returned.
        // Because this function is defined within its parent context, using the "this" keyword it has access through closure and scope to call carname.
        return 'I have a ' + this.carname;
    }
}
// The "extends" keyword can be used in class declarations to create a class as a child of another class.
// The below class Model uses the "extends" keyword to create a class child of the Car class.
// This allows the child class Model to inherit the Car class properties and functions.
class Model extends Car {
    // Class Model extends from the Car class and so requires a brand, but defines a new constructor "mod".
    constructor(brand, mod) {
            //Because the constructor is present in the child class Model, we must first call super().
            //The super keyword is used to access and call functions on an object's parent.
            //By calling brand as an argument of super(), we avoid duplicating any common elements of the constructor shared between the parent and child class.
            super(brand);
            //The "this" keyword sets the current instance object of mode to a variable/attribute attached to model.
            this.model = mod;
        }
        // The below show() function is created. The function is called on the class instance created above.
        // It utilises the model object created above.
        // Additionally, due to closure and scope, the child class has access to all of the parents functions through the "this" keyword.
        // This allows Model to call the present() function and have access to the instance object of brand within the carname attribute.
    show() {
        // When the show() function is called, it will return the present function()
        // Utilising the "this" keyword, show() takes the instance object stored within the model and concatenates it with a new string.
        return this.present() + ', it was made in ' + this.model;
    }
}

// The below line establishes a variable named "makes" and assigns it to an array.
// The array contains strings, all popular car brands.
let makes = ['Ford', 'Holden', 'Toyota'];
// The below line establishes a variable named "models" and assigns it to the Array.from() method.
// The Array.from() method creates a copy of an array instance.
// In this case the function is creating a copy of an array from an array constructor.
// The Array() constructor is used to create array objects.
// In the below Array() constructor it takes on two arguments. 
// The first  argument is denoted by (40), which instructs the constructor to create an array with its length property set to 40.
// If we call the length method on models: console.log(models.length) -> the output will be 40.
// The second argument is denoted by the function; (x, i) => i + 1980) which instructs the constructor to place the number 1980 at index [0] of the array.
// The constructor is then to iterate through the array, and at every index denoted by x, i is than incremented by 1 starting at 1980.
// This results in the first index equalling to 1980, and index [40] equalling 2019.
let models = Array.from(new Array(40), (x, i) => i + 1980);
// The function randomIntFromInterval is declared and takes two arguments.
// The first argument is denoted by "min" and takes a minimal number.
// The second argument is denoted by "max" and takes a maximum number.
function randomIntFromInterval(min, max) {
    // When randomIntFromInterval is called with two arguments it returns the following:
    // The Math.random() function returns a floating-point random number in the range 0 to less than 1 (inclusive of 0, but not 1). 
    // Both min and max values are inclusive of the function.
    // The Math.random() method generates a random number between the values of min and max.
    // The Math.floor() method returns the nearest integer value.
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// The for of statement creates a loop iterating over iterable objects such as arrays.
for (model of models) {
    // The below line takes the randomIntFromInterval function and calls it on the "makes" and "models" array.
    // The value of 0 is used as the functions "min" argument.
    // This denotes index [0] of the "makes" and "models" arrays.
    // The value of makes.length - 1 / models.length -  is used as the functions "max" argument.
    // The randomIntFromInterval takes these two parameters and runs its random number generation on the "makes" and "models" array.
    // The variable "make" is established and assigned to the the "makes" array.
    // While the variable "model" is established and assigned to the "models" array.
    make = makes[randomIntFromInterval(0, makes.length - 1)];
    model = models[randomIntFromInterval(0, models.length - 1)];
    // Whenever "make" or "model" are called, the following occurs:
    // The variables calls the randomIntFromInterval function to generate a random element within the arrays, (car brand in makes) and (year in models).
    // The variables are then assigned to the random element and display it when called upon.
    // The below line establishes a variable named mycar (following convention should probably be myCar) and assigns to a new instances of the class Model.
    // The new instance of the Model class now takes two arguments; the above variables of "make" and "model".
    mycar = new Model(make, model);
    // The line below is console logging the new class "mycar" and calling its parent show() function.
    // And when console.log(mycar.show()) is executed, 40 lines are executed thanks to the for (model of models) function.
    // All 40 possible years within the models array are iterated through and assigned one of the three "makes" array elements.
    // For each iteration, the random "make" and "model" selected are used in the show() function which is returning the string:
    // this.present() + ', it was made in ' + this.model
    // The show() function is able to be accessed by "mycar" because it is a new instance of the class model, it inherits its parent's properties and functions.
    // And because the model class is a child of the Class Car, it too has access to its parent's functions.
    // Closure and inheritance of parent to child scoping allows "mycar" to access "make" and "model", and implement them to display the show()function.
    console.log(mycar.show());
}
*/