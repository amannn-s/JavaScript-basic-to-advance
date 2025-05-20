"use strict";

/*
/////////////////////////////////////
//* Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;

if (hasDriversLicense) console.log("I can drive.");

// const interface = "Car";
// const private = 5234;

/////////////////////////////////////
//* Functions
// parameter list
function logger(name, age) {
  console.log(`My name is ${name}. I am ${age} years old!`);
}

// calling / running / invoking function
logger("rahul", 18);
logger("vishal", 20);
logger("harsh", 16);

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
const orangeJuice = fruitProcessor(0, 5);

console.log(appleJuice);
console.log(orangeJuice);

const num = Number("23");

/////////////////////////////////////
//* Function Declaration (hoisting) vs Expression

// Function Declaration
function calcAge1(birthYear) {
  return 2025 - birthYear;
}

const age1 = calcAge1(1998);

// Function Expression
const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
};

const age2 = calcAge2(2002);

console.log(age1, age2);

/////////////////////////////////////
//* Arrow functions (one liner function)
const calcAge3 = (birthYear) => 2025 - birthYear;

const age3 = calcAge3(2015);
console.log(age3);

/////////////////////////////////////
//* Functions calling other functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessorNew(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}

const appleJuice = fruitProcessorNew(5, 0);
const orangeJuice = fruitProcessorNew(0, 5);

console.log(appleJuice);
console.log(orangeJuice);

/////////////////////////////////////
//* Coding Challenge #1

//* Back to the two teams, the TEAM-A and the TEAM-B! There is a new discipline, which works differently. Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team). A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

//* Your tasks:
//* 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
//* 2. Use the function to calculate the average for both teams
//* 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgTeamA' and 'avgTeamB'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "avgTeamB win (30 vs. 13)"
//* 4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
//* 5. Ignore draws this time

//* Test data:
//* Data 1: Team-A score 44, 23 and 71. Team-B score 65, 54 and 49
//* Data 2: Team-A score 85, 54 and 41. Team-B score 23, 34 and 27
//* Hints:
//* To calculate average of 3 values, add them all together and divide by 3
//* To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores


/////////////////////////////////////
//* Introduction to Arrays
const friend1 = "Rahul";
const friend2 = "Vishal";
const friend3 = "Harsh";

const friends = ["Rahul", "Vishal", "Harsh"];
console.log(friends);

const y = new Array(1991, 1995, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length); // 3

console.log(friends[friends.length - 1]); // 2

friends[2] = "Ajay";
console.log(friends);
// friends = ["Hello"];

const firstName = "Ravi";
const ravi = [firstName, "Sharma", 2025 - 1999, "Data Scientist", friends];

console.log(ravi);
console.log(ravi[2]);
console.log(ravi[4][0]);

// Exercise
const calcAge = (birthYear) => 2025 - birthYear;
const years = [1991, 1995, 2008, 2020];

calcAge(years[0]);

const ages = [];

/////////////////////////////////////
//* Basic Array Methods
const friends = ["Rahul", "Vishal", "Harsh"];

// Add elements
const newLength = friends.push("Nitin");

console.log(friends);
console.log(newLength);

friends.unshift("Ravi");
console.log(friends);

// Remove elements
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift();
console.log(friends);

friends.push(23);
console.log(friends.indexOf("Vishal"));
console.log(friends.indexOf("Naman"));

console.log(friends.includes("Rahul"));
console.log(friends.includes("Naman"));
console.log(friends.includes(23));

if (friends.includes("Harsh")) {
  console.log("You have a friend called Harsh");
}

/////////////////////////////////////
//* Coding Challenge #2


/////////////////////////////////////
//* Introduction to Objects
const rahulArray = [
  "Rahul",
  "Sharma",
  2025 - 1996,
  "teacher",
  ["Ravi", "Naman", "Nitin"],
  {
    dummyKey: "dummyValue",
  },
];

const rahulObj = {
  firstName: "Rahul",
  lastName: "Sharma",
  age: 2025 - 1996,
  job: "teacher",
  friends: ["Ravi", "Naman", "Nitin"],
};

console.log(rahulObj);

/////////////////////////////////////
//* Dot notation and bracket notation
console.log(rahulObj.lastName);
console.log(rahulObj["last" + "Name"]);
// console.log(rahulObj[lastName]);

const nameKey = "Name";
console.log(rahulObj["first" + nameKey]);
console.log(rahulObj["last" + nameKey]);

// console.log(rahulObj."last" + nameKey);

// const interestedIn = prompt(
//   "What do you want to know about rahul? Choose between firstName, lastName, age, job, friends"
// );

// if (rahulObj[interestedIn]) {
//   console.log(rahulObj[interestedIn]);
// } else {
//   console.log("Wrong request!");
// }

/////////////////////////////////////
//* Object Methods

const car = {
  // properties
  // color, modelNo, type, noOfDoor, engine
  // behavior
  // start(), break(), accelerate(), changeGear(), windowDown()
};

const person = {
  // properties
  // name, height, color, birthYear, friends
  // behavior
  // talk(), walk(), sleep(), jump(), run(), think()
};

const rahul = {
  firstName: "Rahul",
  lastName: "Sharma",
  birthYear: 1996,
  job: "teacher",
  friends: ["Ravi", "Naman", "Nitin"],
  hasDriversLicense: false,

  calcAge1: function (birthYear) {
    return 2025 - birthYear;
  },

  calcAge2: function () {
    return 2025 - rahul.birthYear;
  },

  calcAge3: function () {
    // console.log(this);
    return 2025 - this.birthYear;
  },

  calcAge4: function () {
    const age = 2025 - this.birthYear;
    this.age = age;
    return age;
  },

  summary: function () {
    return `${this.firstName} is a ${this.calcAge4()} year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license!`;
  },
  // return "Rahul is a 29 year old teacher, and he has a/no driver's license"
};

// console.log(rahul.calcAge1(1996));
// console.log(rahul.calcAge2());
// console.log(rahul.calcAge3());
// console.log(rahul.calcAge3());

console.log(rahul);

console.log(rahul.calcAge4());
console.log(rahul.age);
console.log(rahul.age);
console.log(rahul.age);

console.log(rahul.summary());

/////////////////////////////////////
//* The for Loop

// console.log("Lifting weights repetition 1 🏋️");
// console.log("Lifting weights repetition 2 🏋️");
// console.log("Lifting weights repetition 3 🏋️");
// console.log("Lifting weights repetition 4 🏋️");
// console.log("Lifting weights repetition 5 🏋️");
// console.log("Lifting weights repetition 6 🏋️");
// console.log("Lifting weights repetition 7 🏋️");
// console.log("Lifting weights repetition 8 🏋️");
// console.log("Lifting weights repetition 9 🏋️");
// console.log("Lifting weights repetition 10 🏋️");

//* for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️`);
}

//* WORKING
// let rep = 1; TRUE; CodeExecute; rep = 2
// TRUE; CodeExecute; rep = 3
// TRUE; CodeExecute; rep = 4
// ...
// TRUE; CodeExecute; rep = 9
// TRUE; CodeExecute; rep = 10
// TRUE; CodeExecute; rep = 11
// FALSE; ForLoopExit

/////////////////////////////////////
const rahulArr = [
  "Rahul",
  "Sharma",
  2025 - 1996,
  "teacher",
  ["Ravi", "Naman", "Nitin"],
  true,
];

// console.log(rahulArr[0]);
// console.log(rahulArr[1]);
// console.log(rahulArr[2]);
// console.log(rahulArr[3]);
// console.log(rahulArr[4]);
// console.log(rahulArr[5]);
// rahulArr.length = 6

for (let i = 0; i <= rahulArr.length - 1; i++) {
  console.log(rahulArr[i]);
}

console.log("Count from 1 to 10");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("Count from 10 to 1");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

console.log("Print array backwards");
for (let i = rahulArr.length - 1; i >= 0; i--) {
  console.log(rahulArr[i]);
}

console.log("Print table of 5");
// let table = Number(prompt("Enter a number"));
let table = 7;
for (let i = 1; i <= 10; i++) {
  console.log(`${table} * ${i} = ${table * i}`);
}

// 5 * 1 = 5
// 5 * 2 = 10
// 5 * 3 = 15
// 5 * 4 = 20
// ...
// 5 * 9 = 45
// 5 * 10 = 50

//* Nested loop
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(i + " " + j);
  }
}

//* print even number from 1 to 20

for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) console.log(i);
}

for (let i = 2; i <= 20; i = i + 2) {
  console.log(i);
}

//* Factorial of a number
// !5 = 5 * 4 * 3 * 2 * 1 = 120

let f = 1;
for (let i = 1; i <= 5; i++) {
  // 5 * 1 = 5
  // 4 * 5 = 20
  // 3 * 20 = 60
  // 2 * 60 = 120
  // 1 * 120 = 120
  f = i * f;
  console.log(f);
}

console.log(f);

// Find largest element in an array
const nums = [10, 45, 12, 6, 24, 13, 25, 66, 50, 18, 7];

let temp = nums[0];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] > temp) {
    temp = nums[i];
  }
}

// console.log(temp);

// Find largest and second largest element in an array
let first = nums[0]; //10
let second = nums[0]; //10

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > first) {
    // f
    // t
    // f
    second = first;
    first = nums[i];
  } else if (nums[i] > second && nums[i] !== first) {
    // f && f
    // skip
    // t && t
    second = nums[i];
  }
}
console.log(first);
console.log(second);


//* While Loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️`);
}

let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep} 🏋️`);
  rep++;
}

*/

// dice game
let dice = Math.trunc(Math.random() * 6 + 1);

// Math.random() =>  0.0000000001 - 0.9999999999
// Math.random() * 6 =>  0.0000000006 - 5.9999999994
// Math.random() * 6 + 1 =>  1.0000000006 - 6.9999999994
// Math.trunc(Math.random() * 6 + 1) =>  1 - 6

// while (dice != 6) {
//   console.log(`You rolled a ${dice}`);

//   dice = Math.trunc(Math.random() * 6 + 1);
//   if (dice == 6) {
//     console.log("Loop is about to end...");
//   }
// }

do {
  console.log(`You rolled a ${dice}`);

  dice = Math.trunc(Math.random() * 6 + 1);
  if (dice == 6) {
    console.log("Loop is about to end...");
  }
} while (dice != 6);
