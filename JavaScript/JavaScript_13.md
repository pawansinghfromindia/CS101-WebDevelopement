# 🚀 Object Oriented In JavaScript

## 📍 Does JavaScript has Classes?

Yes, Javascript had no Classess and technically right now also there are no classes in JavaScript. <br/>

The people who carry the baggages of C++/Java/Python OOP concept is the best. It is somewhere wrong. <br/>
These syntaxes are programming paradigm basically means these are programming style. <br/>
Programming style could be object oriented style could be functional style and many more. <br/>

JavaScript is primarily a Prototype-based language, not object oriented not functional. <br/>
Everything on top of it is a syntactic sugar so that you don't feel missing out. <br/>
Everything is out there but behind the scene underhood It's prototype. <br/>

## 📍 OOP
- OOP is a programming paradigm simply means structure of writting code <br/>
which style is your preferences like procedural programming, functional or object oriented.

## 📍 Object

If everything is object then what is object?

- It is a collection of properties(variables and constants) and methods(functions).
- ```toLowerCase()```

## 📍 Why we need to use OOP?

- There is no mandatory to use OOP in Javascript as such but the code becoming mess up so code reusablility was difficult.


## 📍 Parts / Components of OOP

- Object literal ```{ }```
- Object literal is nothing but lireally creating an object nothing else.
```javascript
const user = { };
```
- This is the base unit.

```javascript
const user = {
  username: "Mohan",
  loginCount: 8,
  signedIn: true,
};
console.log(user.username);
```

- When we create object literal we can have methods also.

```javascript
const user = {
  username: "Mohan",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log("Got user details from database.");
  },
};
console.log(user.username);
console.log(user.getUserDetails());
```

```javascript
const user = {
  username: "Mohan",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log("Got user details from database.");
    //console.log(`username is : ${username}`); //username not defined
    console.log(`username is : ${this.username}`);
    console.log(this); // current context memory value
  },
};
console.log(user.username);
console.log(user.getUserDetails());
console.log(this); //{} bcuz there is nothing in global current context.
// when you run it in browser there current context contains a lot of things like window object.
```
> **When you run it in browser there current context contains a lot of things like window object.**

## 📍 constructor function

- ```new``` keyword <br/>
1. As we write ```new``` keyword an empty object is created which is called as an ***Instance***. <br/>
2. And due to ```new``` keyword constructor function is called what it does is pack all the arguments and all. <br/>
3. Inject those values  <br/>
4. You get those values in the function.  <br/>

- What is this new keyword? where does it come from?
- this new is actually a constructor function, what it does is allows us to create multiple instances.
- this new is known as ***Constructor function***.

```javascript
function userDetails(username, loginCount, isLoggedIn) {
  //username = username
  //myUsername = username
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

const userOne = userDetails("Rohan", 12, true);
const userTwo = userDetails("Mohan", 10, false); //It overwrite the value of userOne
console.log(userOne);
// This is why we use new keyword which is a constructor function

const user1 = new userDetails("Rohan", 12, true);
const user2 = new userDetails("Mohan", 10, false);
console.log(user1);
console.log(user1.constructor);
```

# 🚀  Prototypes

- Classes
- Instances (new, this)
- ```this``` keyword is used to specify the current context. <br/>
like Monday is Monday but this week monday or previous week monday or next week monday.

## 📍 4 keywords or 4 Pillars 

### 1. Abstraction
- Hiding internal details
eg: ```fetch()```

### 2. Encapsulation
- Wrapping up of data, hide the data and methods and give you the access of the things which you need.

### 3. Inheritance
- deriving properties and behavior from existing one. <br/>
child - parent.

### 4. Polymorphism
- Poly = many, Morph = form
One methods does various job.

---
**Page-1**
📙📗📕📘📒

# 🚀 Magic of Prototype

## 📍 Behind the Scene - JavaScript

- JavaScript prototypal behavior, this behaviour is very unique.

<img width="435" height="215" alt="image" src="https://github.com/user-attachments/assets/6acc3cd0-8195-48aa-aff5-9d7d3d1f988d" />

- Javascript default behaviour is prototypal behaviour which means JS doesn't take loss until it find null it will go to parent, grand parent,
  grand grand parents and so on.

- This behaviour links to the this keyword and even why does arrow functions do not have this access this is the reason.

- Prototype inside prototype inside prototype this is what we call Prototypal Inheritance.

```Array ---> object -------> null```
```string -----> object ------> null```

- So, we can say in Javascript every single thing is an object, and all the properties which belong to object will have with Arrays and String as
  well Whether usable or not that's different matter.

## 📍 Now function?

- what is function?
- is function a function? or function is an object?
```javascript
function multiplyBy5(num) {
  return num * 5;
}

multiplyBy5.power = 2;
console.log(multiplyBy5(5)); //25
console.log(multiplyBy5.power); //2
console.log(multiplyBy5.prototype); //{}
```
- This proofs that in JavaScript everything is an object so be it function, So we can say that function is function at the same time function is an object
  also in JavaScript. 

- This is because at the end of the day, ```function ------> Object ------> null```

```javascript
function multiplyBy5(num) {
  return num * 5;
}

multiplyBy5.power = 2;
console.log(multiplyBy5(5)); //25
console.log(multiplyBy5.power); //2
console.log(multiplyBy5.prototype); //{}

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  // score++; // here context is not clear and also we can't hardcode it.
  this.score++;
};

createUser.prototype.pringtMe = function () {
  console.log(`Price is ${this.score}`);
};

const tea = createUser("Tea", 50);
const chai = createUser("Chai", 75);
//chai.pringtMe();
// till here everything is fine and even properties are also injected but It will give error and say undefined this is because we are missing one very important thing that is new.
// we have not tell that we have additional properties who will does this job to tell that we have new properties is new keyword.
// new, new is reponsible for transferring the value in variable where you called the function.
const tea1 = new createUser("Tea", 50);
const chai1 = new createUser("Chai", 75);
chai1.pringtMe();
```


### 👆 Here is what happened behind the scenes when the new keyword is used

- A new object is created: The new keyword is initiates the creation of a new javascript object.

- A prototype is linked : The newly created objcet gets linked to the prototype property  of the constructor function. <br/>
  This means that it has access to properties  and methods defined on the constructor's prototype.

- The Constructor is called : The constructor function is called with the specified  arguments  and this  is bound to the newly created object. <br/>
  If no explicit return value is specified from the constructor, Javascript assumes this, the newly created object, to be the intended return value.

- The new object is returned: After the constructir function has been called, if it doesn't return a non-primitive value (object, Array, function, etc), <br/>
   the newly created object is returned.

```javascript
let myName = "Ram";
console.log(myName.length);

let myName1 = "Ram   ";
//console.log(myName1.length);
//console.log(myName1.trim().length);
console.log(myName1.trueLength);
```

```javascript
let myHeros = ["Thor", "Spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`spidy power is ${this.spiderman}`);
  },
};

//heroPower.krishna();
// suppose we want something like the krishna() function can we do that?

Object.prototype.krishna = function () {
  console.log(`Krishna is present in all object`);
};

heroPower.krishna();
myHeros.krishna();

Array.prototype.heyKrishna = function () {
  console.log(`Krishna says hello`);
};

myHeros.heyKrishna();
// heroPower.heyKrishna();
```

---
**Page-2**
📙📗📕📘📒

# 🚀 Inheritance

```
const Teacher = {
  makeVide: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS Assignment",
  fulltime: true,
};
```
- Every object in itself an instance.
- If you want to exchange the information to link this similar to prototype  earlier we have a property ```__proto__```

```javascript
const TASupport = {
  makeAssignment: "JS Assignment",
  fulltime: true,

  __proto__: TeachingSupport,
};
```

```javascript
const User = {
  name: "user",
  email: "user@dot.com",
};

const Teacher = {
  makeVide: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS Assignment",
  fulltime: true,

  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;
//This is what we call as Prototypal inheritance that how can we access the other propwerties.
//This approach is little outdated.

//Modern Syntax is
Object.setPrototypeOf(TeachingSupport, Teacher);

// Now lets implement the truelength method
let anotherUsername = "Nomadic    ";

String.prototype.trueLength = function () {
  console.log(this);
  console.log(`The true length is ${this.trim().length}`);
};

anotherUsername.trueLength();
"Hello".trueLength();
"Abc   ".trueLength();
```
- JavaScript OOP is now completed.
- After that whatever we read like Class and everything that is syntactical sugar, internally things work like this only.

---
**Page-3**
📙📗📕📘📒

> **Note : Call , Bind and Apply in JavaScript generally read simulatenously together but we will see all of three at different stages.**

## 📍 Call and this in JavaScript

- What is the usecase to use call keyword?

- We know we have call stack in JS where there is a global execution context on top of that all of the function context.

<img width="703" height="345" alt="image" src="https://github.com/user-attachments/assets/67be8805-9e8d-4970-bc1d-db073855276a" />


```javascript
setUsername.call(this, username);
```

---
**Page-4**
📙📗📕📘📒

Class Constructor and static in JavaScript. <br/>

Now all of these things came after ES6.

---
**Page-5**
📙📗📕📘📒

# 🚀 Static property

```javascript
class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  createID() {
    return `123`;
  }

  static createUniqueID() {
    return `123`;
  }
}

const aman = new User("Aman");
console.log(aman.createID());
//console.log(aman.createUniqueID());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const Sachin = new Teacher("Sachin", "sachin@google.com");
console.log(Sachin);
Sachin.logMe();
console.log(Sachin.createID());
// Sachin.createUniqueID();
```
---
**Page-6**
📙📗📕📘📒

# 🚀 Bind in JavaScript

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React</title>
  </head>
  <body>
    <button>Button Clicked</button>
  </body>
  <script>
    class React {
      constructor() {
        this.library = "React";
        this.server = "https://localhost:300";

        //requirement : As page load, an object is created
        document
          .querySelector("button")
          .addEventListener("click", this.handleClick.bind(this));
        // to keep the reference if this, we need to bind
      }
      handleClick() {
        console.log("button clicked");
        console.log(this.server);
      }
    }

    const app = new React();
  </script>
</html>
```

---
**Page-7**
📙📗📕📘📒

# 🚀 Interview Questions

- ```getOwnPropertyDescriptor()``` shows few hidden property of an object. <br/>
 eg : you get an object but you can't iterate it, this might be possible that iterator property fot the object is disabled. Yes you can do that. <br/>
 eg: why we can't change the universal const Math.PI value? <br/>

```javascript
console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

const mynewObject = Object.create(null);
console.log(mynewObject);

//or
const chai = {
  name: "ginger chai",
  price: 25,
  isAvailable: true,

  orderChai: function () {
    console.log("Code phatt gya!!");
  },
};
console.log(Object.getOwnPropertyDescriptor(chai));
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object.defineProperty(chai, "name", {
//   writable: false,
//   enumerable: false,
// });
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} :${value}`);
  }
}

Object.defineProperty(chai, "name", {
  //writable: false,
  enumerable: true,
});
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} :${value}`);
  }
}
```

---
**Page-8**
📙📗📕📘📒


# 🚀 Getter setter and StackOverflow

---
**Page-9**
📙📗📕📘📒

#  🚀 Lexical Scoping & Closure

## Closure
- A Closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
- In other words, a closure gives you access to an outer function's scope from an inner function.


---
**Page-10**
📙📗📕📘📒

# 🚀 JavaScript End Story!

- The story of Michael Phelps, an American Swimmer

## 📍 Coach & Student
```
Student - Yes, I'm ready bcuz I practiced, I have done enough to prepared.
Coach - But, You won't win Gold Medal bcuz You're ready but not for Gold
	You're not prepared for Unexpected Odd conditions which are not
	encountered yet, real battle fields problems, unknown factors for which 
	didn't prepared.
	
Coach started introducing unknown factors to students
Like - you forgot you bag before exam, It is nothing to realted with Medal wining but the mental pressure
Irritate youself with everything
```
	
- Core JavaScript is completed but you will encountered small small problems and scenarios and hidden points.
- Rest everything you will learn when you encountered the problem and you will learn by yourself.

---
**Page-11**
📙📗📕📘📒

[Prev]() [Next]()
