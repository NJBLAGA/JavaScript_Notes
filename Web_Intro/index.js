const monthlyRent = 500;
const yearInMonths = 12;

const yearlyRentPaid = () => {
  yearlyRent = monthlyRent * yearInMonths;
  return `My Monthly Rent equates to: $${monthlyRent}, while my Yearly Rent equates to $${yearlyRent}`;
};
const results = yearlyRentPaid();

const fullName = () => {
  let firstName = "Nathan";
  let secondName = "Blaga";
  return `${firstName} ${secondName}...`;
};

let para = document.getElementById("rent-results");
let myName = document.getElementById("My-Name");
myName.innerText = fullName();
para.innerText = results;

let buttonOne = document.getElementById("button-1");
buttonOne.innerText = "Click Me";

let boxOne = document.getElementById("box1");
let boxTwo = document.getElementById("box2");
let boxThree = document.getElementById("box3");

let boxColors = ["red", "blue", "limegreen", "orange", "yellow", "purple", "pink"];

const random = (array) => {
  let arr = array
  let color = arr[Math.floor(Math.random() * arr.length)]
  return color
}

const randomRoll = () => {
  let numbers = ["Hello", "Good-Bye", "LOL", "YOLO", "Run", "Stay", "Good-Evening", "Good-Morning"];
  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  return randomNumber;
};

buttonOne.addEventListener("click", () => {
  let col1 = random(boxColors)
  let col2 = random(boxColors)
  let col3 = random(boxColors)
  boxOne.innerText = randomRoll()
  boxTwo.innerText = randomRoll()
  boxThree.innerText = randomRoll()
  boxOne.style.backgroundColor = col1;
  boxTwo.style.backgroundColor = col2;
  boxThree.style.backgroundColor = col3;
});



