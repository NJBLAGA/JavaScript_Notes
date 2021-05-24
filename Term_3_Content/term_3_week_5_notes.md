# **Term 3 - Week 5 - Notes - Nathan Blaga**

**Js Object constructors and Prototypes:**

- An object constructor is a function that defines properties with the ```this``` keyword.
- It is analogues to the ```initialise``` method in ruby.
- ```this``` is a self-reference to the object instance.
- Can use the ```this``` keyword to create objects with the constructor.
 **Example:**
 ```js
 function Person(name,age) { //Name must pastel case
     this.name = name
     this.age = age
     this.awesome = true
 }
 let instructor = new Person("Nathan", 31)
 // OUTPUT -> Person {name: "Nathan", age: 31, awesome: true}
 ```

 - Object constructors can also define member functions (Analogous to defining a method within the class in Ruby).
 **Example:**
 ```js
 function Hero(name, level) {
     this.name = name
     this.level = level
     this.shout = function() {
         return `My name is ${name}!`
     }
 }
 let person = new Hero("Nathan", 31)
// Output -> My name is Nathan! -> Have to include function () to call the function.
 ```

- Prototype property can be used to add a default property after object creation.

```js
let students = new Person("Bo", 22)
Person.prototype.role = "student"
```

- The prototype is a template object that is shared between all instances of the same constructor - in this case, Person.
- Similar to a superclass in Ruby, except this isn't inheritance.
- We can also use prototype to define member functions outside of the constructor. This is considered best-practice.

```js
function Hero(name, level) {
    this.name = name
    this.level = level
}
Hero.prototype.shout = function() {
    return `My name is ${this.name}!` //This to reference the variable name in the constructor variable Hero
}
```
**Js Classes and Mixins:**

- Classes are ES6 only and are syntactic sugar for object prototypes.
- ```Constructor``` is equivalent to ```initialise``` in ruby.
- ```this``` refers to the object itself, and is equivalent to using @ in Ruby.

```js
class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }
    area() { //Like method in Ruby
        return this.height * this.width
    }
}
let rect = new Rectangle(10,5)
console.log(rect.area())
```
- MDN DOCS - "JavaScript ```class```, introduced in ECMAScript 2015, are primarily syntactical sugar over JavaScript's existing ```prototype-based inheritance```. The class syntax **does not** introduce a new object-oriented inheritance model to JavaScript."

**Static Properties:**
- Static properties are accessed with the class name instead fof an instance variable.
- Use them to define properties that are common for all instance of a class.

**Class inheritance:**
- Can use the ```extends``` keyword to inherit from another class.
- Can use the ```super``` keyword to execute the superclass function.

```js
class Animal {
    constructor(name){
        this.name = name
    }
    speak() {
     return `My name is ${this.name}!`
    }
 }

 class Dog extends Animal {
     constructor(name, breed) {
         super(name)
         this.breed = breed
     }
     speak() {
         return `WOOF!  ${super.speak()} I'm a ${this.breed}!`
     }
 }
 let animal = new Animal("Ted")
 console.log(animal.speak()) 
 // OUTPUT -> My name is Ted!

  let animal = new Dog("Ted", "Border Collie")
 console.log(animal.speak()) 
 // OUTPUT -> My name is Ted!
```

**Object.assign:**
- Used to add or modify properties for an object instance.
- This is a form of composition - we are combining the properties of several objects into on object.

```js
const student = {
    name: "John",
    course: "none"
}

const FTStudent = {
    course: "FastTrack",
    start: "October"
}

const CAStudent = {
    languages: ["ruby", "javascript"],
    speak: function() {
        console.log("I can do it!")
    }
}

let john = Object.assign(student, FTStudent, CAStudent)
console.log(john.speak())
```

**Mixins:**
- Class inheritance only allows one level of extension - a class can extend only one superclass.
- Mixins provide a way to define additional functions that can be implemented by an object or class, and are like interfaces in traditional OOP languages.
- Mixins are similar to the Ruby concept of modules.
- Mixin is an object tha that provides additional functionality
- Use Object.assign to add the mixin function to an object instance.
- An object can use as many mixins as needed.

