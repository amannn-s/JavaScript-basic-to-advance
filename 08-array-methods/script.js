"use strict";

/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
// Start

/////////////////////////////////
// Data
const account1 = {
  owner: "Nitin Shrivastav",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interest: 6,
  pin: 1111,
};

const account2 = {
  owner: "Ravi Baliyan",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interest: 5.5,
  pin: 2222,
};

const account3 = {
  owner: "Rahul Sharma",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interest: 4,
  pin: 3333,
};

const account4 = {
  owner: "Kaushal Singh",
  movements: [430, 1000, 700, 50, 90],
  interest: 7,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

/////////////////////////////////
// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance-value");
const labelSumIn = document.querySelector(".summary-value-in");
const labelSumOut = document.querySelector(".summary-value-out");
const labelSumInterest = document.querySelector(".summary-value-interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login-btn");
const btnTransfer = document.querySelector(".form-btn-transfer");
const btnLoan = document.querySelector(".form-btn-loan");
const btnClose = document.querySelector(".form-btn-close");
const btnSort = document.querySelector(".btn-sort");

const inputLoginUsername = document.querySelector(".login-input-user");
const inputLoginPin = document.querySelector(".login-input-pin");
const inputTransferTo = document.querySelector(".form-input-to");
const inputTransferAmount = document.querySelector(".form-input-amount");
const inputLoanAmount = document.querySelector(".form-input-loan-amount");
const inputCloseUsername = document.querySelector(".form-input-user");
const inputClosePin = document.querySelector(".form-input-pin");

/////////////////////////////////
//* Logic

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const row = `
<div class="movements-row">
  <div class="movements-type movements-type-${type}">${i + 1} ${type}</div>
  <div class="movements-date">3 days ago</div>
  <div class="movements-value">${mov}₹</div>
</div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", row);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce(function (acc, mov) {
    return acc + mov;
  }, 0);

  labelBalance.textContent = `${acc.balance}₹`;
};

const calcDisplaySummary = function (acc) {
  // method chaining
  const income = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${income}₹`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${out}₹`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((mov) => (mov * acc.interest) / 100)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumInterest.textContent = `${interest}₹`;
};

const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((el) => el[0])
      .join("");
  });
};

createUsername(accounts);

/////////////////////////////////
//* Event handlers

let currentAccount;

btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner}`;
    containerApp.style.opacity = 1;
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // update ui
    displayMovements(currentAccount.movements);
    calcDisplayBalance(currentAccount);
    calcDisplaySummary(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferTo.value = inputTransferAmount.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // update ui
    displayMovements(currentAccount.movements);
    calcDisplayBalance(currentAccount);
    calcDisplaySummary(currentAccount);
  }
});

/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
//* Tutorial

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*
/////////////////////////////////
//* Simple Array methods
let arr = ["a", "b", "c", "d", "e"];

//* SLICE
console.log("===SLICE===");
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

//* SPLICE
console.log("===SPLICE===");
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

//* REVERSE
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

//* CONCAT
const letters = arr.concat(arr2);
console.log(letters);

//* JOIN
console.log(letters.join("---"));

/////////////////////////////////
//* new at method
arr = [23, 11, 64];
console.log(arr[-1]);
console.log(arr.at(-1));

console.log("Rahul"[0]);
console.log("Rahul".at(0));
console.log("Rahul".at(-1));

/////////////////////////////////
//* Looping Array: forEach

console.log("for loop");
for (let i = 0; i < movements.length; i++) {
  if (movements[i] > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movements[i]}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movements[i])}`);
  }
}

console.log("for of loop");
for (let movement of movements.entries()) {
  const [i, el] = movement;
  // console.log(i, el);
  if (el > 0) {
    console.log(`Movement ${i + 1}: You deposited ${el}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(el)}`);
  }
}

// console.log(movements); // [200, 450, -400, 3000, -650, -130, 70, 1300]
// console.log(movements.entries()); // [[0, 200], [1, 450], [2, -400], ...]

// forEach calls the callbackfn function one time for each element in the array.
// Performs the specified action for each element in an array.
// forEach(callbackfn: (value: number, index: number, array: number[]) => void, thisArg?: any): void

console.log("for each loop");
movements.forEach(function (mov, i, array) {
  // console.log(i, mov);
  // console.log(array);
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

// 0: function(200, 0, arr)
// 1: function(450, 1, arr)
// 2: function(-400, 2, arr)
// ...


/////////////////////////////////
//* The map Method

const dollarToRs = 86.25;

// const movementsRs = movements.map(function (el, i, arr) {
//   return el * dollarToRs;
// });

const movementsRs = movements.map((el, i, arr) => el * dollarToRs);

console.log(movementsRs);

/////////////////////////////////
//* The filter Method

const deposits = movements.filter(function (el, i, arr) {
  return el > 0;
});

console.log(deposits);

const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);

/////////////////////////////////
//* The reduce Method

// accumulator
const balance = movements.reduce(function (acc, curr, currI, arr) {
  return acc + curr;
}, 0);

console.log(balance);

/////////////////////////////////
//* The find method
const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(firstWithdrawal);

const account = accounts.find(function (el) {
  // console.log(el);
  return el.owner === "Rahul Sharma";
});

console.log(account);

/////////////////////////////////
//* some & every

console.log(movements);

// Equality
console.log(movements.includes(250));

console.log(movements.some((mov) => mov >= 200));
console.log(movements.some((mov) => mov >= 4000));
console.log(movements.some((mov) => mov >= 0));

console.log(movements.every((mov) => mov >= 0));
console.log(movements.every((mov) => typeof mov === "number"));
*/

const deposit = function (el) {
  return el > 0;
};

console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
