"use strict";

/*
////////////////////////////
//* Default Parameters
const bookings = [];

const createBooking = function (
  trainNum,
  numPassengers = 1,
  price = 200 * numPassengers
) {
  const booking = {
    trainNum,
    numPassengers,
    price,
  };
  //   console.log(booking);
  bookings.push(booking);
};

createBooking("train1");
createBooking("train2", 1, 200);
createBooking("train3", 4);

console.log(bookings);

////////////////////////////
//* How Passing Arguments Works: Values Vs Reference

const trainTicket = "train101";
const rahul = {
  name: "Rahul Sharma",
  adhaar: "123456",
};

// parameter list (input)
const checkIn = function (ticket, passenger) {
  ticket = "train101-checked";
  passenger.name = "Mr. " + passenger.name;
};

// arguments
checkIn(trainTicket, rahul);

console.log(trainTicket, rahul);
*/

////////////////////////////

// document.querySelector("h1").addEventListener("click", function(){})

//* Function Accepting Callback Functions

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher order function
const transform = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transform("JavaScript is the best", oneWord);
transform("JavaScript is the best", upperFirstWord);

// Functions Returning Function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHello = greet("Hello");

greeterHello("Rahul");
greeterHello("Nitin");
greeterHello("Ravi");

const greeterMorning = greet("Good morning");
greeterMorning("Nitin");
greeterMorning("Ravi");

greet("Hey")("Vijay");
