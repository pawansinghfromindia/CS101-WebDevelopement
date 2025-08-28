// Object
const myObject = {
  js: "javascript",
  py: "python",
  cpp: "c++",
  rb: "ruby",
  swift: "swift by app",
};

// myObject is not iteratable
// then how to iterate on object
// for in () loop
// Note : It is not only limited to object we use it in other places as well

console.log("-----------keys of object------------");
for (const key in myObject) {
  console.log(key); //keys
}

console.log("-----------values of object------------");
for (const key in myObject) {
  console.log(myObject[key]);
}

console.log("-----------keys  + values of object------------");
for (const key in myObject) {
  console.log(key, ":", myObject[key]);
}

console.log("-----------keys  + values of object------------");

for (const key in myObject) {
  console.log(`${key} : ${myObject[key]}`);
}

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

console.log(
  "-----------for in loop on Map - not allowed as map is not a iterator-------------"
);

const myMap = new Map();
myMap.set("IND", "India");
myMap.set("IND", "India");
myMap.set("IND", "India");
myMap.set("JAP", "Japan");
myMap.set("FRA", "France");
myMap.set("RUS", "Russia");

for (const key in myMap) {
  console.log(key); // as map key is an array
}
//No error but Map is not iteratble
