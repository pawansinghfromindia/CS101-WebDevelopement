/*
The story of Scope starts with 3 keywords
var //classic 
let
const
*/

var a = 10;
let b = 20;
const c = 30;

console.log(a);
console.log(b);
console.log(c);
//There is no issue here with all of 3 var,let,const then why let and const if var is working fine?
// var is not work as block code that's why we need let and const
// How?

//{} //this is known as scope in every programming language
// like scope of a program or scope of a function
//{} // don't mix it with object declaration

console.log("-----------------------------------------");

var name = "Sam";
let age = 18;

if (true) {
  var name = "John";
  let age = 20;
  const gender = "M";

  console.log("Inner age: ", age);

  //scope of name,age and gender is inside this if block only
  //this should be access outside otherwise there will be problem
}
console.log(name); // John which shouldn't be this is a problem
// This is why we don't use var
//console.log(age); //not accessible outside the if block
//console.log(gender); //not accessible outside the if block

console.log("outer age:", age); //18 this age is totally independent of age which is declared inside the if(){} bcuz it is declared with let not var

const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
}

// scope in browser window
/*
 your global scope in browser window and global scope in node environment both are different
*/
