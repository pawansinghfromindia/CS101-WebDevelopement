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
