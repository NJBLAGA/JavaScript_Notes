# **Term 3 - Week 2 - Notes - Nathan Blaga**
----------------------------------------------------------------------------------------
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
----------------------------------------------------------------------------------------
## **NodeJS Intro:**

Terminology:

- npm( or yarn) is package manager that manages external dependencies
- package.json is the main configuration file, define all dependencies and entry point scripts
- package-lock.json keeps all records of all versions of packages installed

```t
npm init -y
# -y default configuration
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
----------------------------------------------------------------------------------------
## **Unit Testing Javascript Using Jest:**

Added start script to package.json file
=>  "start": "node index.js"

Create file => index.js 

Create 2 folders:
- src => file named hello.js
- test

**EXPORTING/INPORTING:**

index.js =>
```js
index.js => const { hello } = require('./src/hello')
// Inport function from another file
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
