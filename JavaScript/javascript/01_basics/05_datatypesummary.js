/*

Datatypes are broadly divided into 2 categories based on how data is store/access in memory
1. Primitive Datatypes
2. Non-Primitive(Reference type) Datatypes

To see difference there is a 
In C/C++/Java you must have heard call by value and call by reference 

# Primitive Datatypes are call by value means when you call them you will not get their memory reference you get copy of it and whatever changes you will made that will happen inside copy

1. number - 0,1,2,3
2. string - "Hello"
3. boolean - true/false
4. null - it is empty, and it is type in itself
5. undefined - you just have declared the variable, memory space allocated but what value you will put in it not decided/unknown
6. symbol - symbol is used to make any value unique especially in Adv JS frontend
7. bigint - scientific big numbers

#Reference type or Non-Primitive Datatypes,when you call them you will get their memory reference directly 

1. Array
2. Objects
3. Functions

Is JavaScript dynamically typed or statically typed language?

statically typed - If you have to defined variable data type in a language, so It increase little bit safety like C/C++/Java

statically typed -If you don't have to defined variable data type in a language like Python/JavaScript

JavaScript doesn't force you to defined variable datatype.

JavaScript's Brother === TypeScript, there you have to defined the datatype

const score = 100; //javascript
const score:number = 100; //typescript

type safety is good thing, we will see it later on.

*/

const fullmarks = 100; //number
let num = 101.456; //number
let isLoggedIn = true; //boolean
let temp = null; //null
let userEmail; //undefined
let userProfile = undefined; //undefined

let userName = "Rohit";
const id = Symbol(userName); // symbol and the return type is symbol only

const id1 = Symbol(101);
const id2 = Symbol(101);
console.log(id1 == id2); //false

const bigNumber = 98765432101234567;
console.log(typeof bigNumber, bigNumber); //number

const bigIntNumber = 98765432101234567n;
console.log(typeof bigIntNumber, bigIntNumber); //bigint

const countries = ["India", "Japan", "USA"]; // array

{
  name: "Mohit";
  age: 21;
} // object, whatever is inside the {} is object and inside an object you can store anything string, number, boolean, array or even another object

let myObj = { name: "Ram", age: 20 }; // object assigned in a variable

// You can treat function in javascript like as a variable

const myFunction = function () {
  console.log("Hello myFumction");
}; //function

console.log(typeof myFunction); //function object
console.log(typeof 101010101010n); //bigint
console.log(typeof myObj); // object
console.log(typeof [1, 3, 5]); //object
console.log(typeof Symbol(1)); //symbol
