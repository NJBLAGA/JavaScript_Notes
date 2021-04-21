// Example:

//Add an Event to an Object
/*In this example we get a button with the id of 'my-button.
Now we attach an event listener by using the .addEventListener()
method and pass in what event we want to listen for --'click --and what function fo code will run. */

const el = document.querySelector("#my-button")

el.addEventListener('click', function(event) { //event can be named anything, by convention called event
    alert("You clicked the button")
})

//Removing Event Listeners
/*We can also remove an event listener from an object --
here we have set a condition that removes the same 'click event listener when count has reached 3 */
const el = document.querySelector('button')
let count = 0
el.addEventListener('click', function(e) {
    if (count >= 3) {
        //at 3 clicks the event listener will be removed and no longer used.
        el.removeEventListener('click')
    } else {
        count++
        alert('Times Clicked: ' + count)
    }
})

//event.preventDefault()
const el = document.querySelector('#signup-form')
el.addEventListener('submit', function(event) {
    event.preventDefault()
})

//event.target
/*Another useful property of the event object is the target property.
The event gives you the html and it's attributes - in turn you can get it's value.
IN the example we console.log() each letter as we type in the input text field. */

/* <input id="username" type="text"> */

const username = document.querySelector('$username')
username.addEventListener('input', function(event) {
    console.log(event.target.value)
})