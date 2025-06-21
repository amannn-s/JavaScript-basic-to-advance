"use strict";

const restaurant = {
  name: "Subway",
  location: "sector 16, Noida, India",
  categories: ["Indian", "Italian", "Vegetarian", "Non-Vegetarian"],
  starterMenu: ["Garlic Bread", "Salad", "Sandwich", "Multigrain Bread"],
  mainMenu: ["Pizza", "Pasta", "Thali"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ time, address, mainIndex, starterIndex }) {
    // const { time, address, mainIndex, starterIndex } = deliveryDetails;
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is you delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (topping1, topping2) {
    console.log("You pizza with " + topping1 + " and " + topping2);
  },
};

//* Maps

const rest = new Map();
rest.set("name", "KFC");
rest.set(1, "New Delhi");
console.log(rest.set(2, "Noida"));

rest
  .set("categories", ["Indian", "Italian"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are Closed :(");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

let time = new Date().getHours();
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

rest.delete(2);
// rest.clear();

console.log(rest);

/*

//////////////////////////////////////
//* Set
const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Garlic Bread",
  "Pasta",
  "Pizza",
]);

console.log(orderSet);

console.log(new Set("Payal"));
console.log(orderSet.size);
console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Chocolate"));
orderSet.add("Item new");
orderSet.add("Item new");
orderSet.delete("Garlic Bread");
console.log(orderSet);

for (let i of orderSet) {
  console.log(i);
}

// example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];

console.log(staffUnique);

//////////////////////////////////////
//* Short Circuiting (&& and ||)

// Falsy Value: 0, "", null, undefined, NaN
// Use any data type, return any data type

//* OR: First truthy value, if non present then last falsy value
console.log("--- OR ---");
console.log(3 || "Rahul");
console.log("" || "Rahul");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "Hello" || 23 || null);

// add key in restaurant obj
restaurant.numGuests = 12;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// AND
//* AND: First falsy value, if non present then last truthy value
console.log("--- AND ---");
console.log(0 && "Rahul");
console.log(7 && "Rahul");

console.log("Hello" && 23 && null && "Rahul");

if (restaurant.orderPizza) {
  restaurant.orderPizza("Mushroom", "Onion");
}

restaurant.orderPizza && restaurant.orderPizza("Topping1", "Topping2");


//////////////////////////////////////
//* Rest Pattern and Parameters
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because On LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, pasta, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, pasta, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;

console.log(sat);
console.log(weekdays);

// Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(10, 20);
add(10, 40);
add(100, 40, 50);
add(100, 40, 50, 35, 80);
add(...[100, 40, 50, 35, 80]);

//////////////////////////////////////
//* The Spread Operator (...)
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...arr); // 7, 8, 9
console.log(7, 8, 9);

const newMenu = [...restaurant.mainMenu, "Paneer"];
console.log(newMenu);

//* copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//* join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//* Iterables: arrays, strings, maps, sets, NOT Objects
const str = "Rahul";
console.log([...str, " ", "S."]);

//* Real-world example
const ingredient = [
  // prompt("Lets make pasta! Ingredient 1?"),
  // prompt("Ingredient 2?"),
  // prompt("Ingredient 3?"),
];

restaurant.orderPasta(ingredient[0], ingredient[1], ingredient[2]);
restaurant.orderPasta(...ingredient);

//* Objects
const newRestaurant = { ...restaurant, foundedIn: 1998 };
console.log(newRestaurant);

//////////////////////////////////////
//* Destructuring Objects

restaurant.orderDelivery({
  time: "22.30",
  address: "12th street",
  mainIndex: 2,
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//* rename destructuring variables
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

//* default values
const { menu = [], starterMenu: starters } = restaurant;
console.log(menu, starters);

//* Mutating variables
let a = 111;
let b = 999;
console.log(a, b);

const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//* Nested Objects

console.log(openingHours);
const {
  fri: { open: o = 10, close: c = 22 },
} = openingHours;

console.log(o, c);


//* Destructuring Arrays
//* Destructuring of an array in JavaScript is a convenient way to extract values from an array and assign them to variables in a single line.

const arr = [1, 3, 5];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

//* skip a value while destructuring an array
const [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//* simple example
const [a1, a2, a3] = [100, 200, 300];

//* receive 2 return values from a method
const [starter, mainCourse] = restaurant.order(2, 1);
console.log(starter, mainCourse);

//* Nested destructing
const nested = [2, 4, [5, 6]];

console.log(nested[1]);
console.log(nested[2][0]);

const [i, j, [k, l]] = nested;
console.log(i, j, k, l);

//* Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

*/
