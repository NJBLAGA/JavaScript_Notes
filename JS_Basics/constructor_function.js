function Person(first, last, age, eye, lan) {
    this.firstName = first
    this.lastName = last
    this.age = age
    this.eyeColor = eye
    this.nationality = lan
}
let me = new Person("James", "Brown", 22, "Green", "English")
let you = new Person("Kane", "Brown", 25, "Green", "English")
    // me.nationality = "English"
    // Person.nationality = "English"
let kaneFamily = []
kaneFamily.push(me, you)
console.log(kaneFamily)

//Built-in JS Constructors:
var x1 = new Object(); // A new Object object
var x2 = new String(); // A new String object
var x3 = new Number(); // A new Number object
var x4 = new Boolean(); // A new Boolean object
var x5 = new Array(); // A new Array object
var x6 = new RegExp(); // A new RegExp object
var x7 = new Function(); // A new Function object
var x8 = new Date(); // A new Date object
// As you can see above, JavaScript has object versions of the primitive data types String, Number, and Boolean. 
// But there is no reason to create complex objects. Primitive values are much faster.
// Use object literals {} instead of new Object().
// Use string literals "" instead of new String().
// Use number literals 12345 instead of new Number().
// Use boolean literals true / false instead of new Boolean().
// Use array literals [] instead of new Array().
// Use pattern literals /()/ instead of new RegExp().
// Use function expressions () {} instead of new Function().
var x1 = {}; // new object
var x2 = ""; // new primitive string
var x3 = 0; // new primitive number
var x4 = false; // new primitive boolean
var x5 = []; // new array object
var x6 = /()/ // new regexp object
var x7 = function() {}; // new function object