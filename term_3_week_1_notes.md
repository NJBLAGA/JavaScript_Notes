# **Term 3 - Week 1 - Notes - Nathan Blaga**
----------------------------------------------------------------------------------------
## **JS Intro:**

### **Script-tag**
<script src="xxx.js"></script>

### **Syntax:**

var a  = 1
#variable

let b = 2
#scope

const c = 5
#constant (cannot be changed)

### **String:**

"Hello".length
#length method

name = "kane"
name.length

name.charAt(1)
#index

"Hello " + "World!" = "Hello World!"

`My name is ${name}` = "My name is kane"
#string inter

#Js = all numbers are floats

#can use <,>, !, =<, || etc

### **Using ===**

123 == "123" = true

123 === "123" = false #strict

### **Object (hash):**

const foo = {}

foo = object {}

foo["name"] = "John"

foo =  object "John

const person ={
    name: "Matt",
    age: 41,
    address: {
        city: "Wollongong",
        postcode: 2500,
    }
}

person = name: "Matt"
    age: 41
    address: 
        city: "Wollongong"
        postcode: 2500

person["age"] = 41

OR

person.age = 41

person.address.city = city: "Wollongong"

person.age = 42 #change
----------------------------------------------------------------------------------------
## **JS Arrays:**

const arr = ["Matt", 48, 4510]

arr[1] = 48
#index 1

- arr.length; = 3 elements
- arr.includes(12); = false
- arr.includes(48); = true
- arr.push "Hello"; #add new element
- arr.unshift(2); #insert element at start of the array
- arr.pop(); #remove element at the end of the array 
- arr.shift(); #remove element at the start of the array 
- arr.length-1; #last item of the array
- arr.splice(1, 1); #removes a specific amount of items from an array, starting at a specific position in the array.

let skittleColours = ["red, "orange", "yellow", "green". "purple"];

let mmColours = ["red", "orange", yellow", "green", "brown"];

- let candyColours = skittleColours.concat(mmColours); #combine
- let distinctColours = Array.from(new Set(candyColours)); #create new set with unique values
- let sortedColours = distinctColours.sort(); #sorts the array (alphabetically for strings, lowest-to-highest for numbers.)
- let reverseSortedColours = sortedColours.reverse(); # reverse the array

**Control Flow**

- if
- if else
- if elseif
- while
- switch(case)
- for

let coinFlip = "heads"

if (coinFlip == "heads") {
    console.log("The coin landed with heads facing up!");
}

let randomNumber = "4"

if (randomNumber == 4){
    console.log("The number was equal to 4!");
}

if (randomNumber === 4){
    console.log("The number was equal to 4!");
}

console.log(1 == 1) // always true

if (true){
    console.log("Always appears because the condition always returns TRUE."):
}

if (false){
    console.log("Always appears because the condition always returns FALSE."):
}

**Falsey Vales:**

- false
- 0
- ""
- NaN(not a number)
- null
- undefined

**And (&&):**

if ("0" == 0 && "hello" === "hello"){
    console.log("Two conditions both were met!");
}

if ("hello" == "world" && 10 > 5){
    console.log("Only one condition was met, not both, so this message won't appear.");
}

**Or (||):**

if (0 < 10 || "banana" == 4){
    console.log("Only one condition was met, but the OR operator says that's good enough!");
}

let sky = "blue";

if (sky === "blue"){
    console.log(:Sky is blue today!);
} else {
    console.log("Sky is not blue today...");
}

**else if:**

let newPassword = "Password123";

if (newPassword[0] != newPassword.toUpperCase()[0]){
    console.log("Password does not start with a capital letter!");
} else if (newPassword.toLowerCase().includes(:password")){
    console.log("Password should not use easy-to-guess words!");
} else {
    console.log("Password is okay!");
}

**switch(case statement):**

let userFavouriteColour = "pink"

switch (userFavouriteColour) {
    case "red":
        console.log(:The user's favourite colour is RED!");
        break;
    case "orange":
        console.log("The user's favourite colour is ORANGE!");
        break;
    case "yellow":
        console.log("The user's favourite colour is YELLOW!");
        break;
    default:
        console.log("The user's favourite colour is not in the rainbow!");
        break;
}
----------------------------------------------------------------------------------------
## **JS Loops:**

**for:**

for (let counter = 0; counter < 5; counter++){
    console.log('This message has appeared ${counter} previous times.');
}

var storedPassword = "password123";

for (let attemptsRemaining = 5; attemptsRemaining > 0;){
    let userInput = prompt("What is the password?");
    if (userInput == stored Password) {
        break;
    } else {
        attemptsRemaining--;
    }
}

**while loop:**

let olympicMedals = 0;

while (olympicMedals < 10){
    olympicMedals++;
    console.log("YOu won another Olympic medal!");
}

console.log("Okay, you have 10, that's enough for one day!");

### **Looping over arrays:**

**for each:**

let rainbowColours = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

rainbowColours.forEach(colour => {
    console.log("This fancy colour ${colour} is in the rainbow!");
})

**map:**

let rainbowColours = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

let capitalizedColourNames = rainbowColours.map(colour => {
    return colour.toUpperCase();
})

console.log(capitalizedColourNames);
----------------------------------------------------------------------------------------
## **JS Functions:**

#Method or Procedure - set of statements that perform tasks

function add(x, y) {
    return x + y;
}

add(1,2);

(; is optional)

function myArgs() {
    console.log(arguments);
}

myArgs(1,2,3,4);

function myOtherArgs(x,y, ...args) {
    console.log(x,y, args);
}

myOtherArgs(11,22,33,44,55,66);

(...args rest operator)

**first-class function:**

- assigned to variables (first class object)
- nest in other objects
- pass as parameter
- return from other functions


**anonymous function:**

- functions without a name

const myCoolFunction = function(input) {
    console.log(input);
}

myCoolFunction("Such a cool function");

const myArray = [1,2,3];
const myArrayIncremented = myArray.map(
    function(item) {
        return item + 1
    }
);

console.log(myArrayIncremented);

**fat arrows (replaces function syntax):**

const myCoolFunction = (input) => {
    console.log(input);
}

myCoolFunction("Such a cool function");

let multiplier = function(x,y) {
    return x * y;
}

let multiplier = (x,y) => x * y;

**callback function:**

function add(a,b) {
    console.log("a+b =", a+b);
    return a+b;
}

function subtract(a,b) {
    console.log("a-b =", a-b);
    return a-b;
}

function calculate(callback,a,b) {
    callback(a,b);
}

calculate(add,5,3);
calculate(subtract,5,3);
----------------------------------------------------------------------------------------
## **Additional Resources:**

**JS Conditional Cheatsheet:** [https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-control-flow/cheatsheet]

**JS Loops Cheatsheet:** [https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-loops/cheatsheet]
