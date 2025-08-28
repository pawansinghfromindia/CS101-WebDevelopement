/*
We can't run all the codes in one go.
Codes should must be conditional
eg: login then a set of code will execute
    logout then another set of code will execute

This is what we known as Control flow or Logic flow

very easy and basic

*/
//if

// if (condition) {
//   //code to be executed
// }

const isUserLoggedIn = true;
if (isUserLoggedIn) {
}
/*
 comparison operator
< less than
> greater than
<= less than equal to
>= greater than equal to 
== equal to
!= not equal to
=== strict equal same as ==, but unlike == which only checks values, === checks values + data types as well, this is why it is called as strict equal
!== strict unequal

 */
if (2 == "2") {
  console.log("Hello");
}
if (2 === "2") {
  console.log("Hello");
}

console.log(2 == "2"); //true
console.log(2 === "2"); //false

console.log("\n-----------------if-----------------------\n");

const temp = 29;
if (temp < 50) {
  console.log("Temperature is less than 50");
}
console.log("Temperature is greater than 50");
// here we need else, else is condtional code, either if will execute or else will execute;

console.log("\n-------------------if(){} else{}--------------------\n");

const temperature = 29;
if (temperature < 50) {
  console.log("Temperature is less than 50");
} else {
  console.log("Temperature is greater than 50");
}

console.log("\n----------------scope inside if else-----------------\n");

const score = 400;
if (score > 200) {
  const power = "Premium";
  var pow = "basic";
  console.log(`Student: ${power}`);
}
//console.log(`Student: ${power}`); //power is not defined
// this is the why we use let and const otherwise if we use var that will be accessible outside the if body bcuz var scope is completely global which shouldn't be
console.log(`Student: ${pow}`);

console.log("\n--------------------short hand----------------------\n");

const balance = 1000;
if (balance > 500) {
  console.log("Yes");
}

if (balance > 500) console.log("Yes"); // implicit scope only works for a single line of code
// you can add more number of line but that will be unreadable code immature code not a good practice
if (balance > 500)
  console.log("We can write multiple line using comma"),
    console.log("We can add but unreadable code"),
    console.log("Don't use it!");

console.log(
  "\n--------------nesting multiple condition---------------------\n"
);

let balance1 = 1000;
if (balance1 < 500) {
  console.log("less than 500");
} else if (balance1 < 750) {
  console.log("less than 750");
} else if (balance1 < 1000) {
  console.log("less than 1000");
} else {
  console.log("greater than 1000");
}

console.log("\n---------------two conditions checks && ||-----------------\n");

const isLoggedIn = true;
const debitCard = true;
const isLoggedInEmail = true;
const isLoggedInFb = true;

if (isLoggedIn && debitCard) {
  console.log("Allow shopping!");
}

if (isLoggedInEmail || isLoggedInFb || true) {
  console.log("LoggedIn");
}
