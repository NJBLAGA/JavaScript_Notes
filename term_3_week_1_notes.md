# **Term 3 - Week 1 - Notes - Nathan Blaga**
----------------------------------------------------------------------------------------
## **JS Intro:**

### **Script-tag**

```js
<script src="xxx.js"></script>
```

### **Syntax:**

```js
var a  = 1
// variable

let b = 2
// scope

const c = 5
// constant (cannot be changed)

String:

"Hello".length
// length method

name = "kane"
name.length

name.charAt(1)
// index

"Hello " + "World!" = "Hello World!"

`My name is ${name}` = "My name is kane"
// string inter

// Js = all numbers are floats

can use <,>, !, =<, || etc

// Using ===

123 == "123" = true

123 === "123" = false #strict

// Object (hash):

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

// OR

person.age = 41

person.address.city = city: "Wollongong"

person.age = 42 #change
```
----------------------------------------------------------------------------------------
## **JS Arrays:**

```js
const arr = ["Matt", 48, 4510]

arr[1] = 48
// index 1
```

- arr.length; = 3 elements
- arr.includes(12); = false
- arr.includes(48); = true
- arr.push "Hello"; => add new element
- arr.unshift(2); => insert element at start of the array
- arr.pop(); => remove element at the end of the array 
- arr.shift(); => remove element at the start of the array 
- arr.length-1; => last item of the array
- arr.splice(1, 1); => removes a specific amount of items from an array, starting at a specific position in the array.

```js
let skittleColours = ["red, "orange", "yellow", "green". "purple"];

let mmColours = ["red", "orange", yellow", "green", "brown"];

- let candyColours = skittleColours.concat(mmColours); => combine
- let distinctColours = Array.from(new Set(candyColours)); => create new set with unique values
- let sortedColours = distinctColours.sort(); => sorts the array (alphabetically for strings, lowest-to-highest for numbers.)
- let reverseSortedColours = sortedColours.reverse(); => reverse the array
```

**Control Flow**

- if
- if else
- if elseif
- while
- switch(case)
- for

```js
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
```

**Falsey Vales:**

- false
- 0
- ""
- NaN(not a number)
- null
- undefined

**And (&&):**

```js
if ("0" == 0 && "hello" === "hello"){
    console.log("Two conditions both were met!");
}

if ("hello" == "world" && 10 > 5){
    console.log("Only one condition was met, not both, so this message won't appear.");
}
```

**Or (||):**

```js
if (0 < 10 || "banana" == 4){
    console.log("Only one condition was met, but the OR operator says that's good enough!");
}

let sky = "blue";

if (sky === "blue"){
    console.log(:Sky is blue today!);
} else {
    console.log("Sky is not blue today...");
}
```

**else if:**

```js
let newPassword = "Password123";

if (newPassword[0] != newPassword.toUpperCase()[0]){
    console.log("Password does not start with a capital letter!");
} else if (newPassword.toLowerCase().includes(:password")){
    console.log("Password should not use easy-to-guess words!");
} else {
    console.log("Password is okay!");
}
```

**switch(case statement):**

```js
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
```

**Arrays:** [https://medium.com/swlh/array-prototypal-inheritance-aa25de1fd678]
----------------------------------------------------------------------------------------
## **JS Loops:**

**for:**

```js
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
```

**while loop:**

```js
let olympicMedals = 0;

while (olympicMedals < 10){
    olympicMedals++;
    console.log("YOu won another Olympic medal!");
}

console.log("Okay, you have 10, that's enough for one day!");
```

### **Looping over arrays:**

**for each:**

```js
let rainbowColours = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

rainbowColours.forEach(colour => {
    console.log("This fancy colour ${colour} is in the rainbow!");
})
```

**map:**

```js
let rainbowColours = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

let capitalizedColourNames = rainbowColours.map(colour => {
    return colour.toUpperCase();
})

console.log(capitalizedColourNames);
```
----------------------------------------------------------------------------------------
## **JS Functions:**

```js
<!-- Method or Procedure - set of statements that perform tasks -->

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
```

**first-class function:**

- assigned to variables (first class object)
- nest in other objects
- pass as parameter
- return from other functions


**anonymous function:**

- functions without a name

```js
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
```

----------------------------------------------------------------------------------------
## **JS Input/Output:**

- console.log("Hello World")
- console.warn("This is a warning message")
- console.error("This is an error message")
- alert("This is an alert")
- prompt("What is your name?")

```js
let name = prompt("What is your name")
console.log("Your name is " + name)
console.log(`Your name is ${name}`)
```

**JS Objects:** [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#description]
----------------------------------------------------------------------------------------
## **JS Math Operators:**
- ```+``` (addition)
- ```-``` (subtraction)
- ```\/``` (division)
- ```*``` (multiplication)
- ```%``` (remainder)
- ```**``` (exponentiation)
- ```+=``` or ```++``` (self addition)
- ```-=``` or ```--``` (self subtraction)
- ```Math.floor(1.2);``` => always rounds down
- ```Math.ceil(1.2);``` => always rounds up
- ```Math.PI;```

**JS Math Methods:** [https://www.w3schools.com/js/js_math.asp]
----------------------------------------------------------------------------------------
## **Additional Resources:**

**JS Arrow Function:** [https://dev.to/sshymko/arrow-function-vs-closure-596n]

**JS Conditional Cheatsheet:** [https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-control-flow/cheatsheet]

**JS Loops Cheatsheet:** [https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-loops/cheatsheet]

**JS Node Masterclass:** [https://edstem.org/courses/4965/lessons/8036/slides/58127]
----------------------------------------------------------------------------------------
## **Thursday Class - 8/04/21:**

- MDN Docs 

## **Week 1 Challenges:**

// Write a function that takes the user's age in years and tells them how old they are days.

```js
const yearsInDays = (age) => {
    ageInYears = age * 365.25
    console.log(ageInYears)
}

console.log(yearsInDays(31))
```

```js
function compareNumbers(a, b) {
    return a - b
}

function highLow(numberArray) {
    numberArray.sort(compareNumbers)
         const lowest = numberArray[0]
         const highest = numberArray[numberArray.length - 1]
    return {
      highest,
      lowest,
    }
}

testArray1 = [3, 2, 8, 44 , 1 ,9]
console.log(highLow(testArray1))
```
----------------------------------------------------------------------------------------
## **Friday Class - 9/04/21:**

Challenge: find the bug in this function:

```js
function duplicateSpreadsheet(original) {
  let copy = {
    created: Date.now(),
    author: original.author,
    cells: original.cells,
    metadata: original.metadata
  }
  copy.metadata.title = 'Copy of ' + original.metadata.title
  return copy
}
```

Notes:
- This relates to what we talking about yesterday, with the danger of "pass by reference", and assigning one object to another
- This is tricky! Read the code, think about it, discuss.
- Try running the function with the test below and seeing what happens

```js
const spreadSheet = {
  author: "Billy Bob",
  cells: 'some spreadsheet cells...',
  metadata: {
    title: 'Some kind of spreadsheet'
  }

// Solution:
const stringified = JSON.stringify(spreadSheet)
const parsed = JSON.parse(stringified)
console.log(spreadSheet)
console.log(stringified)
console.log(parsed)

Object.freeze(spreadSheet)
Object.freeze(spreadSheet.metadata)


const spreadsheetDuplicate = duplicateSpreadsheet(spreadSheet)
console.log("spreadsheetDuplicate:", spreadsheetDuplicate)
console.log("spreadSheet (original):", spreadSheet)
```

**JS Glossary:** [http://jargon.js.org/_glossary/ARITY.md]


