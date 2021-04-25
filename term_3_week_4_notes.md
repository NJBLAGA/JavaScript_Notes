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


