# **Term 3 - Week 3 - Notes - Nathan Blaga**

**Asynchronous JS Introduction:**

**Synchronous:**
- Synchronous code is also referred to as block code, each statement is executed in order and must finish before moving on to the next line of code
- JS is a single-threaded language
- One Thread == One Call Stack == One Thing At a Time (Philip Roberts) -> One thing at a time
- Drawback -> Takes awhile in browser (not a good experience) -> browser wants to render (every 65 milliseconds)

```js
//Block Code:
console.log(1)
setTimeout(() => {
    console.log(2)
}, 3000)
console.log(3)
```

**Asynchronous:** 
- Means we can start something, wait for a response, and let others things happen while we're waiting
- SetTimeOut is ASYNC
- Js operates asynchronously using the call stack, callback queue, and event loop

**JS Call Stack:**
- How JS keeps track of the execution order of its code
- LIFO (Last in, First Out)

**JS Callback queue /Task queue:**
- How JS processes responses from async functions
- FIFO (First In, First Out)

**JS Event Loop:**
- Handles asynchronous function calls by:
- placing callback functions on the callback queue when they are ready to be executed 
- place callback functions form the queue onto the call stack when its empty

**Promises - Introduction:**

- A JS object
- Available methods -> .then, .catch, .finally
- A status- or state- that is immutable
- A value that depends on the status

```js
function squareNumber(number) {
    return new Promise((resolve, reject) => {
        if (typeof number !== 'number') {
            reject(new Error("Input must be a number"))
        }
        resolve(number * number)
    })
}
let squaredNumber = squareNumber(10)
squaredNumber
    .then(number => console.log(number))
    .catch(error => console.log("Error " + error.message))
    // .then(squaredNumber => console.log("The squared number is " + squaredNumber))
    // .catch(error => console.error(error.message))
    // .finally(() => console.log("The promise has finished"))
console.log(squaredNumber)
```

**Promises - Promise Chaining:**

- Then method or onResolve -> takes a callback function, always returns a Promise, can bed chained forever
- Catch method or OnReject -> takes a callback function, will handle any rejected promise in the chain, will also handle any thrown error in the chain

```js
function generateRandomNumber(limit) {
    console.log("Generating number between 1-" + limit)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof limit !== 'number') {
                reject(new Error("Input must be a number"))
            }
            const randomNumber = Math.floor(Math.random() * limit) + 1
            resolve(randomNumber)
        }, 1000)
    })
}

function doubleNumber(num) {
    return new Promise((resolve, reject) => {
        if (num < 0) {
            reject(new Error("Can't double negative number with simple math!"))
        }
        resolve(num * 2)
    })
}

function logIfSmall(number) {
    if (number > 15) {
        throw new Error("That number is too big")
    } else
        console.log("The doubled number " + number)
}

generateRandomNumber(10)
    .then(number => {
        console.log("The Number is " + number)
        return number
    })
    .then(doubleNumber)
    .then(logIfSmall)
    .catch(error => console.log("Caught Error: " + error.message))
```

**Promises - Refactoring Callback Hell:**

- A series of nested callbacks
- Nested functions rely on prior function being finished
- Pyramid of Doom

```js
function getJoke() {
    return new Promise((resolve, reject) => {
        $getJson("https://icanhazdadjoke.com/", (response) => {
            if (response) {
                resolve(response.joke)
            }
            reject(new Error("Failed to get Joke"))
        })
    })
}

document.getElementById("button").addEventListener("click", () => {
    let promiseArray = []
    for (let i = 0; i < 5; i++) {
        promiseArray.push(getJoke())
    }
    Promise.all(promiseArray)
        .then(jokeArray => console.log(jokeArray))
        .catch(error => console.error("Error caught: " + error.message))
})
```

**Async/Await:**

- Async functions are instances of the AsyncFUnction constructor, and the await keyword is permitted within them.
- The async and await keywords enable asynchronous promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
- REturn a Promise that either:
- Resolves to the value explicitly returned form the function
- Rejects with an error thrown from the function

```js
async function asyncGreeter(name) {
    if (!name) {
        throw "Name cannot be null."
    }
    return `Hello ${name}`
}

function promiseGreeter(name) {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject("Name cannot be null")
        }
        resolve(`Hello ${name}`)
    })
}
```
- Async functions are used ot enable the use of await
```js
async function processData(source) {
    get data = await getDataAsync(source)
    return shapeData(data)
}
```
- The await expression can only be used in an async function
- It causes async function execution to pause until a Promise is settled
- It forces synchronous code execution in the context of the async function

**AJAX and Fetch API:**

**WEB API**
- Are one of the most popular tools to access data in web development
- We send a request to a URL (with AJAX) and the sever sends us the required data (usually JSON) back
- We will build our own servers with our own data soon, but in the meantime, we can access a third-party web API

**AJAX:**
- Asynchronous Javascript And XML
- Allows reloading only specific elements of the page instead of the entire page
- Applied to create, dynamic and modern websites
- Not dependent on what browser it's running on
- Can send and receive information in various formats like JSON, XML, HTML and text files

**Using AJAX with jQuery:**
- jQuery is a popular JS library (less popular now because of frameworks like React, Vue and Angular.)
- jQuery is supported on browsers
- Can be downloaded or used with jQuery CDN
- jQuery provides us a cleaner syntax and  a straightforward implementation
- Same as most modern AJAX libraries, jQuery's AJAX is built on top of XHR requests
- They are just there to abstract away the complexity

**Fetch API:**
- The fetch API is just another way to do the same thing that we can do with XHR
- It uses Promises instead of callbacks which has made it very popular and can easier to use
- Fetch is the standard for AJAX in modern browsers

```js
let pokeFetch = fetch(pokemonUrl)
    .then((response) => response.json()) //returns a promise
    .then((data) => {console.log(data)}) //handles the data and runs a function
    .catch((error) => {console.log("error: " + error)}) //hands the errors
```












