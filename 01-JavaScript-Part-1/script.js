/*
/////////////////////////////////////////////////////
//* Linking a JavaScript File
// alert("Hi user");
console.log("JavaScript is FUN!!!");

/////////////////////////////////////////////////////
// x = 25
//* Values and Variables
console.log("Rahul");
console.log(25);

// to store a value we need a variable(box)
let firstName = "Vishal";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// variable naming conventions
let rahul_sharma = "RS";
let $age = 26;

let age26 = 26;
// let 26age = 26;

let PI = 3.1415;
console.log(PI);

let job1 = "Programmer";
let job2 = "Teacher";

// camelCasing
let myFirstJob = "Coder";
let myCurrentJob = "Trainer";

/////////////////////////////////////////////////////
//* Values Data types

// 1. number
let age = 24.45;
let Age = 28;
console.log(age);
console.log(typeof age);

// 2. string '' ""
console.log("Rahul24");
console.log(typeof "Rahul24");

// 3. boolean true & false
console.log(true);
console.log(typeof true);

// 4. undefined (empty value)
let schoolName;
console.log(schoolName);
console.log(typeof schoolName);

// 5. null (empty value)
let collegeName = null;
console.log(collegeName);
console.log(typeof collegeName);

/////////////////////////////////////////////////////
//* let, const and var

let age = 36;
age = 37;
let job;

const birthYear = 1998;
// birthYear = 1999;
// const hobby;

// before es6 (Ecma Script)
var firstName = "Rahul";
firstName = "Vishal";

/////////////////////////////////////////////////////
//* Basic Operators
// Math operators
const now = 2025;
const ageRahul = now - 1991;
const ageVishal = now - 2002;

console.log(ageRahul, ageVishal);

console.log(ageRahul * 2, ageVishal / 10, 2 ** 3);
// 2 ** 3 => 2 to the power of 3 => 2 * 2 * 2
console.log(ageVishal % 10);

const firstName = "Mohit";
const lastName = "Sharma";
// concat
console.log(firstName + " " + lastName);

// sum
let x = 10 + 5; // 15
x = x + 10; // 25
x += 25; // 50
x *= 4; // 200
x /= 2; // 100
x++; // 101
x++; // 102
x--; // 101
console.log(x);

// Comparison operators (boolean) <, >, <=, >=, ==, !=
console.log(ageRahul > ageVishal);
console.log(ageVishal >= 25);

console.log(now - 1991 > now - 2002);

/////////////////////////////////////////////////////
//* Operator Precedence

// 18 grouping                 => ()
// 13 exponentiation           => **
// 12 multiplicative operators => *, /, %,
// 11 additive operators       => +, -
// 9 relational operators      => <, >, <=, >=
// 8 equality operators        => ==, !=
// 2 assignment                => =, *=, +=, -=
// 1 comma                     => ,

const now = 2025;
const ageRahul = now - 1991;
const ageVishal = now - 2002;

console.log(now - 1991 > now - 2002);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

console.log(ageRahul, ageVishal);
console.log(ageRahul + ageVishal / 2);
console.log((ageRahul + ageVishal) / 2);

/////////////////////////////////////////////////////
//* Coding Challenge #1
// Rahul and Vishal are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height).

// 1. Store Rahul's and Vishal's mass and height in variable (massRahul, heightRahul, massVishal, heightVishal).
// 2. Calculate both their BMI's using the formula (BMIRahul, BMIVishal)
// 3. Create a boolean variable 'rahulHigherBMI' containing information about wether Rahul has a higher BMI than Vishal.

// Test DATA 1: Rahul mass = 78 kg and height = 1.69 m tall, Vishal mass = 92 kg and height = 1.95 m tall
// Test DATA 2: Rahul mass = 85 kg and height = 1.88 m tall, Vishal mass = 85 kg and height = 1.76 m tall

let massRahul,
  heightRahul,
  massVishal,
  heightVishal,
  BMIRahul,
  BMIVishal,
  rahulHigherBMI;

//   Test Data 1
massRahul = 78;
heightRahul = 1.69;

massVishal = 92;
heightVishal = 1.95;

BMIRahul = massRahul / heightRahul ** 2;
BMIVishal = massVishal / (heightVishal * heightVishal);

console.log(BMIRahul, BMIVishal);

rahulHigherBMI = BMIRahul > BMIVishal;
console.log(rahulHigherBMI);

// Test Data 2
massRahul = 85;
heightRahul = 1.88;

massVishal = 85;
heightVishal = 1.76;

BMIRahul = massRahul / heightRahul ** 2;
BMIVishal = massVishal / (heightVishal * heightVishal);

console.log(BMIRahul, BMIVishal);

rahulHigherBMI = BMIRahul > BMIVishal;
console.log(rahulHigherBMI);

/////////////////////////////////////////////////////
//* Strings and Template Literals
const firstName = "Rahul";
const job = "developer";
const birthYear = 1996;
const year = 2025;

// with the help of above variables I want to generate a sentence(string)
const rahul =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(rahul);

// single quotes, double quotes, back tick
const rahulNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(rahulNew);

console.log(`Just a regular string...`);

console.log("String with \nmultiple \nlines");

console.log(`String with 
multiple
lines`);

/////////////////////////////////////////////////////
//* Taking Decisions, If/else statements
const age = Number(prompt("Enter your age"));

if (age >= 18) {
  console.log("Mohit can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Mohit is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 2012;

let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

/////////////////////////////////////////////////////
//* Coding Challenge #2

// Use the BMI example from challenge #1, and the code your already wrote, and improve it:
// 1. Print a nice output to the console, saying who has the higher BMI. the message can be either Rahul's BMI is higher than Vishal's BMI or Vishal's BMI is higher than Rahul's BMI!.
// 2. Use a template literal to include the BMI values in the outputs. Example: Rahul's BMI (28.3) is higher than Vishal's (23.9).

// Use an if/else statement

let massRahul,
  heightRahul,
  massVishal,
  heightVishal,
  BMIRahul,
  BMIVishal,
  rahulHigherBMI;

//   Test Data 1
massRahul = 78;
heightRahul = 1.69;

massVishal = 92;
heightVishal = 1.95;

BMIRahul = massRahul / heightRahul ** 2;
BMIVishal = massVishal / (heightVishal * heightVishal);

console.log(BMIRahul, BMIVishal);

if (BMIRahul > BMIVishal) {
  console.log(
    `Rahul's BMI (${BMIRahul}) is higher than Vishal's (${BMIVishal})!`
  );
} else {
  console.log(
    `Vishal's BMI (${BMIVishal}) is higher than Rahul's (${BMIRahul})!`
  );
}

/////////////////////////////////////////////////////
//* Type Conversion and Coercion

// Type Conversion
const inputYear = "1991";
console.log(inputYear, typeof inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

// Not A Number
console.log(Number("Rahul"));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coercion (when js automatically converts the data type)
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1; // '11'
n = n - 1; // 10
console.log(n);

/////////////////////////////////////////////////////
//* Truthy & Falsy Values

//* 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Mohit"));
console.log(Boolean(""));
console.log(Boolean({}));

const money = 10;

if (money) console.log("Don't spend it all!");
else console.log("You Should get a Job!");

let height;
if (height) console.log("Height is defined");
else console.log("Hight is UNDEFINED");

/////////////////////////////////////////////////////
//* Equality Operators: == vs ===
const age = "18";

// Checks value
if (age == 18) console.log("You just became an adult! (Loose)");

// Checks value as well as data type
if (age === 18) console.log("You just became an adult! (Strict)");

// EXAMPLE:
const favorite = Number(prompt("What's you favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  console.log("23 is an amazing number");
}

/////////////////////////////////////////////////////
//* Logical Operators

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Rahul is able to drive");
// } else {
//   console.log("Someone else should drive");
// }

// true && true && true => true
// true && false && true => false
// true || false || true => true
// false || false || false => true

const isTired = true; // C

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Rahul is able to drive");
} else {
  console.log("Someone else should drive");
}

/////////////////////////////////////////////////////
//* Coding Challenge #3

//* There are two teams, TEAM-A and TEAM-B. They compete against each other 3 times. The winner with the highest *AVERAGE SCORE* wins a trophy!

//* Your tasks:
//* 1. Calculate the average score for each team, using the test data below
//* 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)

//* TEST DATA:
//* Data 1: TEAM-A score 96, 108 and 89. TEAM-B score 88, 91 and 110

// ------------------------------------------------------------------------------------------------

//* 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks
//* 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

//* TEST DATA:
//* Data Bonus 1: TEAM-A score 97, 112 and 101. TEAM-B score 109, 95 and 123
//* Data Bonus 2: TEAM-A score 97, 112 and 101. TEAM-B score 109, 95 and 106

/////////////////////////////////////////////////////
//* The switch Statement
const day = "sunday";

switch (day) {
  // day === friday
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare for theory");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code and learn practically");
    break;
  case "friday":
    console.log("Give exam");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy weekend");
    break;
  default:
    console.log("Not a valid day!!!");
}

if (day == "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day == "tuesday") {
  console.log("Prepare for theory");
} else if (day == "wednesday" || day == "thursday") {
  console.log("Write code and learn practically");
} else if (day == "friday") {
  console.log("Give exam");
} else if (day == "saturday" || day == "sunday") {
  console.log("Enjoy weekend");
} else {
  console.log("Not a valid day!!!");
}

/////////////////////////////////////////////////////
//* Statements(line) and Expressions(words)
3 + 4;
1991;
true && false && !false;

if (23 > 10) {
  const str = "23 is greater";
}

const me = "Rahul";
console.log(`I'm ${2025 - 1998} years old ${me}`);

/////////////////////////////////////////////////////
// Ternary operator (Expression)
const age = 22;
console.log(`You ${age >= 18 ? "can" : "cannot"} drive a car`);

let drive;

drive = age >= 18 ? "Car" : "Cycle";

// if (age >= 18) {
//   drive = "Car";
// } else {
//   drive = "Cycle"
// }

console.log(drive);

*/

/////////////////////////////////////////////////////
//* Coding Challenge #4

// Rahul wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// 1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement (If it's easier for you, you can start with an if/ else statement, and then try to convert it to a ternary operator!)

// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total is 316.25.'

// TEST DATA:
// value 316.25, 275, 40 and 430

/////////////////////////////////////////////////////
//* Complete part 1

// console.log("End of a file");

// Feature Sum
function sum(x, y) {
  return x + y;
}

sum(100, 200);
