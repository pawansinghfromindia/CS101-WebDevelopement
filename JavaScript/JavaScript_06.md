# 🚀 Scope in javascript

## 📍 Scope - global and local 

- Scope is a big topic like closure etc etc comes under scope.
- Here we will not see topic specific.

## 📍 ```let```, ```const``` and ```var```

- The story of scope starts with 3 keywords let, var and const.
  
- The story of Scope starts with 3 keywords : 
```var``` //classic <br/>
```let``` <br/>
```const``` <br/>

```javascript
var a = 10;
let b = 20;
const c = 30;

console.log(a);
console.log(b);
console.log(c);
```
- There is no issue here with all of 3 ```var```, ```let```, ```const``` then why ```let``` and ```const``` if ```var``` is working fine?

- ```var``` is not work as block code that's why we need ```let``` and ```const```.

##  📍 How?

➜  ```{ }``` // this is known as scope in every programming language. <br/>
➜  Like scope of a program or scope of a function. <br/>
➜  ```{ }``` // don't mix it with object declaration. <br/>

```javascript
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
```

```javascript
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
}
```

## 📍 Scope in browser window

 - Your global scope in browser window and global scope in node environment both are different.


---
**Page-1**
📙📗📕📘📒

# 🚀 Scope level 

- When we talk about scope, then we should also know more about nested scope.
- function inside function then how scope work there?
- What are closures?
  - Closure is a very good technique,  
  - for this you must know DOM (Document Object Model) well
  - Means How to manipulate HTML webpage through JavaScript.

```javascript
function one() {
  const username = "Shiva";
  function two() {
    const website = "google";
    console.log(`Hi, username: ${username} and website: ${website}`);
  }
  //console.log(`username: ${username} website:${website}`); // you can't access website outside two(){}
  two();
}

//two(); // two() undefined bcuz you can't access two() outside one()
//one(); // website is not defined bcuz you can't access website outside two()
// now comment website and run one();

one();
```
## 📍 Call Stack

- There is a story behind every function call.
- Whatever time you declare function inside function and call them for them a different call stack will be created means there scope will also created in call stack.
- There you can see how it store in memory and vanished after the scope is over.
- This is what known as ***closure*** that your inner function can access the outer variable but it is more than that.

- Simple layman term : when nested functions are there then child functions can access parent vaiables.

```javascript
//if block scope

if (true) {
  const empname = "Rahul";
  if (empname === "Rahul") {
    const salary = 100;
    console.log(empname + " and " + salary); // Rahul and 100
  }
  //console.log(website); // not accessible outside the scope of inner child if(){}
}
//console.log(empname); // not accessible outside the parent if(){}
```

```javascript
//
function addOne(num) {
  return num + 1;
}

const result = addOne(5);
console.log(result); //5

// another way to do this
const addTwo = function (num) {
  return num + 2;
};
console.log(addTwo(5)); // 7

// another way to this using arrow function

const addThree = (num) => {
  return num + 3;
};
console.log(addThree(5)); //8

// arrow function of 1 line then no need to return
const addFour = (num) => num + 4;
console.log(addFour(5)); //9
```

## 📍 concept of hoistic 
- which means how we declare function it decides the scope and accessibility of function.

```javascript 
 const addTwo = function (num) {
  return num + 2;
 };
 here function declaration and holding it in a variable together is hoistic
 
 function addOne(num) {
  return num + 1;
 }
 ```
- Here two ways of declaring function both are doing the same job but they are different in terms of accessing before function declarion
 ```addOne(5);``` can run before ```addOne()``` declaration

- While you can't access ```addTwo(5)``` before ```addTwo()``` declaration bcuz of Hoistic concept
 where Javascript make a tree of all functions all variable and then create a context based on that things decide.

---
**Page-2**
📙📗📕📘📒

# 🚀 THIS and Arrow Function


## 📍 Arrow functions - 2015

- If we talk about arrow function we should know about this keyword little bit later on when we study ```__ptotype__```, inheritance etc
then we will see this in detail.

- What **```this keyword```** does is tells about the current context.

```javascript
const user = {
  username: "Chhotu",
  price: 999,

  welcomeMessage: function () {
    //console.log(`${username} , welcome to this website`); // username is fine but object will create dynamically
    console.log(`${this.username} , welcome to the website`);
    console.log(this); // this is current context of object
  },
};

user.welcomeMessage();
user.username = "Rohit";
user.welcomeMessage();
```

## 📍 ```console.log(this);``` on Node Vs Browser Window

```javascript
console.log(this); //{} current context is empty here bcuz we're here on node environment here this is refering an empty object buz there is no context globally.
```

- ```{ }``` current context is empty here bcuz we're here on node environment here this is refering an empty object buz there is no context globally.

- but when you check it, ```console.log(this)``` on browser window, you will get window object because earlier there was only one way to execute javascript in browser so the JS Engine was only found in browser now that JS engine is available everywhere like **node**, **deno**, **bun** etc.

- So browser the global object is window that's why you can capture all the events of browser window like click, form submit etc


## 📍 Pre-requisite for Arrow function

```javascript
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
```

## 📍 Arrow function

- arrow function remove the keyword function before () replace it with  => after ()

```javascript
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
```

## 📍 what if you have to return an object

```javascript
console.log("--------------return object-------------------");

const addObj = () => {
  username: "Ram";
};

console.log(addObj()); // undefined bcuz you can't return object like this
// to return an object you must have to wrap inside paranthesis

const addObj1 = () => ({ username: "Ram" });

console.log(addObj1()); //{ username: "Ram" }
```

```javascript
console.log("---------------array-----------------");
const arr = [1, 2, 3, 4, 5];
arr.forEach(() => {
  console.log(arr);
});
```

---
**Page-3**
📙📗📕📘📒

# 🚀 Immediately invoked function expressions (IIFE)

- As you write function, execute it there only immediately.
- How do we can do this?
- There're ways but why do we need a function which execute immediately after writting.

- Many a time we do  need this specially when we write a function in which only database connection is there and we want as my application starts the database connection starts within the file.

- Sometime global scope pollution bcuz child have access to global which we don't want so we make another scope within the function and that should execute immediately.


## 📍 Immediately invoked function expressions (IIFE)

```javascript
function one() {
  console.log(`DB CONNECTED`);
}
one();

console.log("-----------IIFE-----------------------");

//IIFE

function one() {
  console.log(`DB CONNECTED`);
}(); // How to call it immediately?

(function one() {
  console.log(`DB CONNECTED`);
})(); // Named IIFE, because it has a name
// 1st () function definition and 2nd () function call
```
-  Sometimes problems occurs due to Global Scope pollutions so to remove pollutions from Global scope declaration we do use IIFE

## 📍 can we write this function using arrow function? Yes

```javascript
 (function two() {
   console.log(`DB CONNECTED`);
 })()  <--------- you must have to put ;

(() => {
  console.log(`DB CONNECTED`);
})();

((name) => {
  console.log(`DB CONNECTED ${name}`);
})("AWS"); // Unnamed IIFE without name It is a simple IFFE
```
-  If you don't end the previous function call before executing other function It will give you error.For that must have to put semicolon ; after the function call which is part of syntax but not necessarily (optional)

-  Difference between Named IIFE and Simple IIFE
-  How to pass parameters in IIFE?
-  How to write 2 IIFE together?

  ```javascript
(() => {
  console.log(`DB CONNECTED`);
})();

((name) => {
  console.log(`DB CONNECTED ${name}`);
})("AWS");
```

---
**Page-4**
📙📗📕📘📒

[Prev](https://github.com/pawansinghfromindia/CS101-WebDevelopment/edit/main/JavaScript/JavaScript_05.md)  [Next](https://github.com/pawansinghfromindia/CS101-WebDevelopment/edit/main/JavaScript/JavaScript_07.md)
