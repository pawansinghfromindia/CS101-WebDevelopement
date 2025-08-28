/*
 Nullish Coalescing Operator (??) : null undefined
 Here everything is defined on 2 keywords null and undefined
*/

let val1;
val1 = 5 ?? 10;
console.log(val1); //5
//Does it make sense if the 1st value is assigning to val1?
// why to use it?
// many a time when you call from database or when you use firebase or appwrite then you didn't get response directly you get 2 values so there may be chances you get null as response or no response i.e. undefined in those cases your code structure flow will break so for those cases only 5 ?? 10 specially

val1 = null ?? 10;
console.log(val1); //10
// It is very carefully design new operator for special cases

function addTwo() {
  return 5;
}
var1 = undefined ?? addTwo();
console.log(var1); //5

val1 = null ?? 30 ?? 15;
console.log(val1);

// Note : nullish Coalescing operator and Ternary operator both are different-2 things. Don't get confused that they are same

console.log("\n-----------------ternary operator-------------------\n");

// Ternary operator

/*
It is just shorthand of if(){}else{}

condition ? true : false

It is different in design, pattern and goal

*/
let a = 5;
let b = 7;
if (a > b) {
  console.log("a is greater");
} else {
  console.log("b is greater");
}

a > b ? console.log("a is greater") : console.log("b is greater");

const price = 100;
price <= 80 ? console.log("less than eighty") : console.log("more than 80");
