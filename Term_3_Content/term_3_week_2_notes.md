# **Term 3 - Week 2 - Notes - Nathan Blaga**
## **JS Exception Handling:**
```js
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
```
**Example:**

```js
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
```
## **Error Types and Custom Errors:**
**ReferenceError:**

```js
// Pretty simple, you've tried to access a variable that isn't in scope or hasn't been defined yet.
function willThrow() {
    return foo // throws ReferenceError because foo hasn't been declared yet
}
```
**SyntaxError:**
```js
// Happens when the code you have written breaks JavaScript rules. 
// For example function signatures that do not have brackets, arrays without comma separated values etc. 
// These errors can't be handled except writing syntactically correct code.
function willThrow(( {  // throws SyntaxError 
    return
}
5.toPrecision(2) //throws SyntaxError
```
**TypeError:**
```js
// These errors occur most often when we call a function that isn't defined for that object type.
let string = 'foo'
let number = 5

number.toPrecision(2)
string.toPrecision(2) // throws TypeError. No 'toPrecision' function on a string
```
**Custom errors:**
```js
// There's a lot of different error types out there but sometimes we'll want to create our own custom errors. 
// We do this by extending the built-in Error class.
// We can overwrite the existing attributes (in this case name) 
// and we can create our own attributes that don't exist in the base class 
// (in this case solution) as well as creating custom functions.
class ValidationError extends Error {
    constructor(message, solution) {
        super(message)
        this.name = "ValidationError"
        this.solution = solution
    }
}

function validateUser(userObject) {
    if (!userObject) {
        throw new ValidationError("No user exists", "Create an account before moving on")
    } else if (!user.name) {
        throw new ValidationError(
            "Missing field: name", 
            "You can add your name in the 'about me' section"  
1        )
    } else if (!user.email) {
        throw new ValidationError(
            "Missing field: email", 
            "Update your email in the preferences section"
        )
    }
    return userObject
}

try {
    validateUser(databaseData)
} catch (err) {
    alert("Something is missing! \n" + err.message + "\n" + error.solution)
}
```
## **NodeJS Intro:**
```js
//Terminology:
npm( or yarn) //is package manager that manages external dependencies
package.json //is the main configuration file, define all dependencies and entry point scripts
package-lock.json //keeps all records of all versions of packages installed
```
```js
npm init -y //-y default configuration
```
package.json => scripts =>     "start": "node index.js"
In terminal =>

```t
npm run start
```
***Install Packages:***
```t
npm i [package name]
```
## **Unit Testing Javascript Using Jest:**
Added start script to package.json file
=>  "start": "node index.js"
Create file => index.js 
Create 2 folders:
- src => file named hello.js
- test

**EXPORTING/IMPORTING:**

index.js =>
```js
index.js => const { hello } = require('./src/hello')
// Import function from another file
hello()
// Call function
```

hello.js =>
```js
function hello() {
    console.log("Hello World!!!!")
}
// Function to print Hello Wold

module.exports = {
    hello
}
// Export function hello
```
**Test Driven Development:**

In src => inches-to-cm.js

```js
function inchesToCm(inches) {
    const cm = inches * 2.54
    return cm
}

module.exports = {
    inchesToCm
}
```

In test => inches-to-cm.test.js

```js
const { inchesToCm } = require('../src/inches-to-cm')

describe('inchesToCm', () => {
    it('converts from inches to cm', () => {
        expect(inchesToCm(1)).toBe(2.54)
        expect(inchesToCm(2)).toBe(5.08)
        expect(inchesToCm(4)).toBe(10.16)
    })
})
```
Installed jest
```t
npm i jest
```
In package.json = > change script for test to:
```js
"test": "jest",
```
Run test with:

```t
npm run test
```
## **The node REPL:**

Remember that REPL stands for Read-Eval-Print-Loop, and is just an interactive shell that can run a particular language in the terminal. 
Just like we use IRB for Ruby, the node REPL is useful for experimenting, understanding and debugging JavaScript.

The following special commands are supported by all REPL instances (from Node.js REPL docs:

```js
.exit  //Close the I/O stream, causing the REPL to exit. (control + d)
.break //When in the process of inputting a multi-line expression, entering the .break command
       //(or pressing the <ctrl>-C key combination) will abort further input or processing of that expression.
.clear //Resets the REPL context to an empty object and clears any multi-line expression currently being input.
.help  //Show this list of special commands.
.save  //Save the current REPL session to a file: > .save ./file/to/save.js
.load  //Load a file into the current REPL session. > .load ./file/to/load.js
.editor //Enter editor mode (<ctrl>-D to finish, <ctrl>-C to cancel).
```

**Node REPL for Javascript:**

It is a common practice to avoid installing testing frameworks into our project in the production environment, and only install them in the development and test environments (particularly for unit testing). Read more about different types of environments and where testing is performed in this blog post.

The npm install command can take an additional argument ```js-D```, or the longer version ```js--save-dev```, to indicate we only want to install a package in the development/test environment

Or just use this command:
```js
npm i jest -D
```
Jest tests are structured like so:
```js
describe block: Test group or collection of tests (optional)

it or test block: Individual test

Expectations of the test (one or many)
```