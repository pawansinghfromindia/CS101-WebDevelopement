// Truthy Value and Falsy Value
/*
true and false are strict value like 2 == 2 -> true or 2 > 3 -> false
But there are some values which are assummed that it would be true only or false only
*/

console.log("\n--------------truthy value------------------\n");

let userEmail = "user@google.com";

if (userEmail || []) {
  console.log("Got the user email :", userEmail);
} else {
  console.log("Email not Found!");
}

// We have compared nothing and a string "user@google.com" is considered as true value this is known as Truthy value
// [] empty array is considered as true

console.log("\n--------------falsy value------------------\n");

userEmail = "";

if (userEmail) {
  console.log("Got the user email :", userEmail);
} else {
  console.log("Email not Found!");
}
// We have compared nothing and a empty string "" is considered as false value this is known as Falsy value
/*
Falsy Value
false || 0 || -0 || bigint 0n || "" || null || undefined || NaN
rest all considered as Truthy value
true || 1 || any character || any string || any num || any bignint number || [] || Empty function|| 
|| "0" || 'false' || " " || [] || {} || function(){} ||
*/

console.log("\n------------[] empty array check-----------------\n");

// If [] array is considered as true then how we check array
const arr = [];
if (arr.length === 0) {
  console.log("array is empty");
} else {
  console.log("array is not empty");
}

// we know Object.key() returns [] of keys & value
console.log("\n--------------{} empty obj checks--------------------\n");

const myObj = {};
if (Object.keys(myObj).length === 0) {
  console.log("Object is empty");
} else {
  console.log("Object is not empty");
}

console.log("\n--------------false == 0 ==> true--------------------\n");
if (false == 0) {
  console.log("Hello false == 0");
}

if (false === 0) {
  console.log("Hello false === 0");
}
/*
false == 0   -> true;
false == ""  -> true;
   0  == ""  -> true;
*/
