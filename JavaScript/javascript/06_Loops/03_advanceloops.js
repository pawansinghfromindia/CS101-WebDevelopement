/*
High Order Array Loops

These loops are specific to arrays and objects

In JavaScript Arrays and Objects are very powerful & popular

Strings inside array
["", "", "", ""]

Objects inside array
[{}, {}, {}, {}]

It is very common scenario that you have string and objects inside the array now you have to get elements from the array be it string or Object

So first iterate through loop 
then go inside object and using dot(.) or [] notation to get the values

for of loop
for (const element of object) {
    
}

*/
console.log("-----------for of loop--------------");

// for of loop

const arr = [1, 2, 3, 4, 5];

for (const i of arr) {
  console.log(i);
}

const vowels = "AEIOU aeiou";
for (const vow of vowels) {
  console.log(`Each vowel ${vow}`);
}

console.log("---------------- MAP <key, Value> ------------------");

// Maps
/*
 Maps are like Arrays only, but little different in terms of iterations
 It is a array with unique values

 Map is in itself an Object which hold key value pairs and remembers original insertion order of the keys unlike objects doesn't remember the order

 No duplicate values in Map

*/

const myMap = new Map();
myMap.set("IND", "India");
myMap.set("IND", "India");
myMap.set("IND", "India");
myMap.set("JAP", "Japan");
myMap.set("FRA", "France");
myMap.set("RUS", "Russia");

console.log(myMap); // no dupliucates and order will be same

console.log("-----------for of loop on Map-------------");
for (const key of myMap) {
  console.log(key); // array
}
//Array de-structuring
for (const [key, value] of myMap) {
  console.log(key, ":", value); // key-values
}

console.log("-----------for of loop on object not allowed-------------");

// Object
const myObject = {
  India: "New Delhi",
  Japan: "Tokyo",
  USA: "Washington DC",
  China: "Beijing",
};

// for (const [key, value] of myObject) {
//   console.log(key, ":", value);
// } // myObject is not iteratable

console.log("-----------for of loop on array -------------");

// for in loop on array
let myarr = ["js", "py", "cpp", "rb", "swift"];
for (const element in myarr) {
  console.log(element); // index instead of element
}
// Note : Array's key?
/*
 what is array's keys?
 when you read documentation you will know that actually Object designed for this purpose only because array keys starts with 0 and by default It's number.
 But we wanted to store any key not just number, In object we can put any keys as we wish 
*/

for (const key in myarr) {
  console.log(myarr[key]); // index instead of element
}

// for in loop on Map will work
