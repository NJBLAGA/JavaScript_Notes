const randomRoll = () => {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  return `..${randomNumber}`;
};

console.log(randomRoll());

let numbersTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArray = numbersTest.map((number) => {
  return number;
});
console.log(newArray);

const CapName = (string) => {
  let firstLetter = string.charAt(0).toUpperCase();
  let rest = string.slice(1);
  let finalName = firstLetter.concat(rest);
  return finalName;
};

let name1 = "nathan";

console.log(CapName(name1));
