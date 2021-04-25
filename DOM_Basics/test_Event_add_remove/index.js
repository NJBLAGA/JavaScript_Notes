let sentence = document.getElementById("text")
let input1 = document.getElementById("yourname")
let butn1 = document.getElementById("buttonadd")
let butn2 = document.getElementById("buttonremove")



butn1.addEventListener("click", addName)
butn2.addEventListener("click", removeEvent)


function addName(event) {
    event.preventDefault()
    let myName = input1.value
    sentence.textContent = `Hello ${myName}, pleasure to meet you!`
}

function removeEvent() {
    butn1.removeEventListener("click", addName)
}