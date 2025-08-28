/*
Arrow functions - 2015
If we talk about arrow function we should know about this keyword little bit later on when we study __ptotype__, inheritance etc then we will see this in details

what this keywords does is tells about the current context

*/

const user = {
  username: "Chhotu",
  price: 999,

  welcomeMessage: function () {
    //console.log(`${username} , welcome to this website`); // usename is fine but object will create dynamically
    console.log(`${this.username} , welcome to the website`);
    console.log(this); // this is current context of object
  },
};

user.welcomeMessage();
user.username = "Rohit";
user.welcomeMessage();

console.log("======================================================");

console.log(this); //{} current context is empty here bcuz we're here on node environment here this is refereing an empty object buz there is no context globally
// but when you check it, console.log(this) on browser window, you will get window object because earlier there was only one way to execute javascript in browser so the JS Engine was only found in browser now that JS engine is available everywhere like node, deno, bun etc. So browser the global object is window that's why you can capture all the events of browser window like click, form submit etc

console.log("-------------------------------------------------------------");

// This was the pre-requisite for Arrow function

function one() {
  let usename = "DK";
  console.log(this);
  console.log(this.usename); //undefined bcuz this doesn't work inside function it only work inside objects
}

one();
// here you will get so many values bcuz if you print this inside the function in node environment then there are something store in the this which we can access

const one1 = function () {
  let usename = "DK";
  console.log(this);
  console.log(this.usename);
};

one1();
// both function work similar here

console.log("---------------Arrow function---------------------");

// arrow function remove the keyword function before () replace it with  => after ()
const one2 = () => {
  let usename = "DK";
  console.log(this); // {} empty object which is different from normal function
  console.log(this.usename);
};
one2();

const addTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo(1, 3)); //4

//impicit return means no need to write return keyword bcuz that's of one line code
const addThree = (num1, num2, num3) => num1 + num2 + num3;
console.log(addThree(1, 3, 5)); //9

// const addThree1 = (num1, num2, num3) => (num1 + num2 + num3);
// console.log(addThree1(1, 3, 5)); //9

// Note: This technique is very-2 useful in React

// what if you have to return an object

console.log("--------------return object-------------------");

const addObj = () => {
  username: "Ram";
};

console.log(addObj()); // undefined bcuz you can't return object like this
// to return an object you must have to wrap inside paranthesis

const addObj1 = () => ({ username: "Ram" });

console.log(addObj1()); //{ username: "Ram" }

console.log("---------------array-----------------");
const arr = [1, 2, 3, 4, 5];
arr.forEach(() => {
  console.log(arr);
});
