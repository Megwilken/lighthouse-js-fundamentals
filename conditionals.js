// ifStatements exercise 1
const raining = true;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");

//ifStatements exercise 2
const temperature = 30;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.")
}

console.log("Now you're ready to go outside!");

//ifStatements exercise 3
const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

//ifStatements exercise 4
const temperatureOutside = -50;

if (temperatureOutside < -40 || temperatureOutside > 40) {
  console.log("Maybe going outside isn't such a great idea...");
}

const rainingToday = false
if(!rainingToday) {
  console.log("leave your umbrella at home!");
}