/*
Immediately invoked function expressions (IIFE)

*/

function one() {
  console.log(`DB CONNECTED`);
}
one();

console.log("-----------IIFE-----------------------");

//IIFE

/*
function one() {
  console.log(`DB CONNECTED`);
}(); // How to call it immediately?

*/

(function one() {
  console.log(`DB CONNECTED`);
})(); // Named IIFE, because it has a name
// 1st () function definition and 2nd () function call
// Sometimes problems occurs due to Global Scope pollutions so to remove pollutions from Global scope declaration we do use IIFE

// can we weite this function using arrow function? Yes

// (function two() {
//   console.log(`DB CONNECTED`);
// })()  <--------- you must have to put ;

(() => {
  console.log(`DB CONNECTED`);
})();

((name) => {
  console.log(`DB CONNECTED ${name}`);
})("AWS"); // Unnamed IIFE without name It is a simple IFFE

// If you don't end the previous function call before executing other function It will give you error.For that must have to put semicolon ; after the function call which is part of syntax but not necessarily (optional)

// Difference between Named IIFE and Simple IIFE
// How to pass parameters in IIFE?
// How to write 2 IIFE together?
(() => {
  console.log(`DB CONNECTED`);
})();

((name) => {
  console.log(`DB CONNECTED ${name}`);
})("AWS");
