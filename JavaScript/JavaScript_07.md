# 🚀 How JavaScript Code work?

1. **HOW DOES JAVASCRIPT EXECUTE THE CODE?**
2. **CALL STACK**

➜ This is important for Interview, Basic Foundation of JavaScript 50% Interview

## 📍 Execution Context

➜ There is an interesting way How to execute the code? <br/>
➜ This is divided into 2 parts : <br/>

## Call Stack

➜ Memory, In memory how functions goes, executes nad vanished! <br/>

➜ How to add your JavaScript files to Browsers and visualize how call stack used? <br/>

## JavaScript Execution Context

➜ Execution Context means whatever file you made, How JS run/execute that file? <br/>

➜ To run/execute you file, JS runs it in 2 phase : <br/>

**1. Global Execution Context** [{}] , wherever GEC made it will be refered in the variable this.

➜ Now your Global Execution context will be available in this variable. <br/>
➜ If you run it in Browser then Browser's Global Execution Context is different from Node/Deno/Bun Environment Global Execution Context. <br/>
➜ Browser's GEC is important there this value is window object. <br/>
➜ This executes under a thread. <br/>
➜ JavaScript is single threaded, everything is JS is a process. <br/>

**2. Function/functional Execution Context**

**3. Eval Execution Context** 
➜ It is in itself a property of Global Object. So usually we don't read it separately.



## 📍 MEMORY CREATION PHASE / MEMORY PHASE / CREATION PHASE

- How does it works?
➜ In Memory Creation Phase only memory allocated for whatever variables, functions you declared, they are not executed.

## 📍 EXECUTION PHASE

➜ In Execution phase, your operation ```+```, ```-```, ```*```, ```/```, ```%``` print function call everything happens in Execution phase.


```javascript
let val1 = 10;
let val2 = 20;
function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}
let result = addNum(val1, val2);
let ans = addNum(7, 9);
```


➜ If you can explain the above code, How JavaScript execute the code? That means you know JavaScript well? <br/>

### • Step 1. Global Execution/Global Environment created and alloacted under this. <br/>
➜ This is the first basic steps which will happens for sure. <br/>

### • Step 2. Memory Creation Phase, Here all variables/functions are to collecte and keeps them in memory. <br/>
➜ val1, inside this you will have value undefined. <br/>
➜ val2, inside this also the value will be undefined. <br/>
➜ addNum, inside the function there will be no undefined rather inside this you will have definition of function. <br/>
➜ result, inside this undefined. <br/>
➜ ans, inside this also undefined. <br/>

This is 1st cycle, memory creation phase is over. <br/>

### • Step 3. Execution Phase <br/>
➜ val1 <---- 10, will put the value 10 inside val1 <br/>
➜ val2 <---- 20, will put the value 20 inside val2 <br/>
➜ addNum  <----- nothing will happen bcuz there is no execution <br/>
➜ result <------ here addNum will create a new Execution context <br/>

```
			  New variable environment
						+
				Execution Thread
                         How many times a function call execute  happen that many
                         times a new variable env + Execution thread will be created
```
	
### • Step 1. Memory phase <br/>
➜ num1 <------ undefined <br/>
➜ num2 <------ undefined <br/>
➜ total <------- undefined <br/>
		
### • Step 2. Execution phase <br/>
➜ num1 <----- 10 <br/>
➜ num2 <----- 20 <br/>
➜ total <----- 30 <br/>
		
➜ after this function will return the value to Global Execution Context. <br/>
➜ Now this Execution context will be vanished/deleted. <br/>

➜ result <-------- 30 <br/>
➜ ans <----------- ```addNum()``` will create a new Execution Context <br/>

```
     New variable environment
						+
     Execution Thread
```

### • Step 1. Memory phase 
➜ num1 <------ undefined <br/>
➜ num2 <------ undefined <br/>
➜ total <------- undefined <br/>
				
### • Step 2. Execution phase 
➜ num1 <----- 7 <br/>
➜ num2 <----- 9 <br/>
➜ total <----- 16 <br/>
				
➜ after this function will return the value to Global Execution Context. <br/>
➜ Now this Execution context will be vanished/deleted. <br/>

➜ ans <------ 16 <br/>

➜ Now Call Stack will happen. <br/>

## 📍 Diagramatic Representation

```
--------------------------
addNum(10,20)
--------------------------
Global Execution
--------------------------

addNum(10,20) will execute, return value and then vanished
now after that addNum

--------------------------
addNum(7,9)
--------------------------
Global Execution
--------------------------
addNum(7,9) will execute, return value nad then vanished

Add the end Global execution will also vanished.

If you have function inside the funtion the call stack be created top of the function

--------------------------
insideInsideOne()
--------------------------
insideOne()
--------------------------
one()
--------------------------
Global Execution
--------------------------
```

## 📍 Test in Browser Window

- Stack - LIFO Last In First Out
- You can test in Browser window > source > snippets
- create a file hello.js

```javascript
function one(){
    console.log("one");
    two();
}
function two() {
    console.log("two");
    three();
}
function three(){
    console.log("three");
}

one();
two();
three();
```

- 👆 and you can see call stack there.

---
**Page-1**
📙📗📕📘📒

# 🚀 Control Flow

➜ We can't run all the codes in one go. <br/>
➜ Codes should must be conditional. <br/>
eg: login then a set of code will execute. <br/>
    logout then another set of code will execute. <br/>

➜ This is what we known as Control flow or Logic flow. <br/>
➜ It is very easy and basic. <br/>

## 📍  ```if```

```javascript
if (condition) {
   //code to be executed
 }

const isUserLoggedIn = true;
if (isUserLoggedIn) {
}
```

##  📍 comparison operator

```<``` less than <br/>
```>``` greater than <br/>
```<=``` less than equal to <br/>
```>=``` greater than equal to <br/>
```==``` equal to <br/>
```!=``` not equal to <br/>
```===``` strict equal same as ==, but unlike == which only checks values, === checks values + data types as well, this is why it is called as strict equal <br/>
```!==``` strict unequal <br/>

```javascript
if (2 == "2") {
  console.log("Hello");
}
if (2 === "2") {
  console.log("Hello");
}

console.log(2 == "2"); //true
console.log(2 === "2"); //false
```

```javascript
const temp = 29;
if (temp < 50) {
  console.log("Temperature is less than 50");
}
console.log("Temperature is greater than 50");
// here we need else, else is condtional code, either if will execute or else will execute;
````

## 📍 ```if(){ } else{ }```

```javascript
const temperature = 29;
if (temperature < 50) {
  console.log("Temperature is less than 50");
} else {
  console.log("Temperature is greater than 50");
}
```

## 📍 Scope inside if else

```javascript
const score = 400;
if (score > 200) {
  const power = "Premium";
  var pow = "basic";
  console.log(`Student: ${power}`);
}
//console.log(`Student: ${power}`); //power is not defined
// this is the why we use let and const otherwise if we use var that will
// be accessible outside the if body bcuz var scope is completely global which shouldn't be.

console.log(`Student: ${pow}`);
```
- This is the why we use ```let``` and ```const``` otherwise if we use ```var``` that will be accessible outside the if
  body bcuz var scope is completely global which shouldn't be

## 📍 Short Hand

```javascript
const balance = 1000;
if (balance > 500) {
  console.log("Yes");
}

if (balance > 500) console.log("Yes"); // implicit scope only works for a single line of code
// you can add more number of line but that will be unreadable code immature code not a good practice
if (balance > 500)
  console.log("We can write multiple line using comma"),
    console.log("We can add but unreadable code"),
    console.log("Don't use it!");
```
- Implicit scope only works for a single line of code.
  
## 📍 Nesting multiple condition

```javascript
let balance1 = 1000;
if (balance1 < 500) {
  console.log("less than 500");
} else if (balance1 < 750) {
  console.log("less than 750");
} else if (balance1 < 1000) {
  console.log("less than 1000");
} else {
  console.log("greater than 1000");
}
```

## 📍 Two conditions checks ```&&``` ```||```

```javascript
const isLoggedIn = true;
const debitCard = true;
const isLoggedInEmail = true;
const isLoggedInFb = true;

if (isLoggedIn && debitCard) {
  console.log("Allow shopping!");
}

if (isLoggedInEmail || isLoggedInFb || true) {
  console.log("LoggedIn");
}
```

---
**Page-2**
📙📗📕📘📒

# 🚀 SWITCH

- e.g : like rating 1 to 5 stars

```javascript
switch()
case 1: break;
case 2: break;
case 3: break;
default:
```

```javascript
let week = 7;

switch (week) {
  case 1:
    console.log("Mon");
    break;
  case 2:
    console.log("Tue");
    break;
  case 3:
    console.log("Wed");
    break;
  case 4:
    console.log("Thu");
    break;
  case 5:
    console.log("Fri");
    break;

  default:
    console.log("Weekend Sat || Sun");
    break;
}
```

- As JavaScript is like Old school language, so if you don't put break it will execute all the cases from which it matched except default.

## 📍 ```Switch()``` without ```break```

```javascript
let week = 3;

switch (week) {
  case 1:
    console.log("Mon");
  case 2:
    console.log("Tue");
  case 3:
    console.log("Wed");
  case 4:
    console.log("Thu");
  case 5:
    console.log("Fri");
  default:
    console.log("Weekend Sat || Sun");
}
```

## 📍 String value in switch case

```javascript
let month = "Jan";

switch (month) {
  case "Jan":
    console.log("January");
    break;
  case "Feb":
    console.log("February");
    break;
  case "Mar":
    console.log("March");
    break;
  default:
    console.log("April|May|June|July|Aug|Sep|Oct|Nov|Dec");
}
```

---
**Page-3**
📙📗📕📘📒

# 🚀 TRUTHY and FALSY Values

## 📍 Truthy Value and Falsy Value

- ```true``` and ```false``` are strict value like ```2 == 2``` -> ```true``` or ```2 > 3``` -> ```false```
- But there are some values which are assummed that it would be ```true``` only or ```false``` only.


## 📍 truthy value

```javascript
let userEmail = "user@google.com";

if (userEmail || []) {
  console.log("Got the user email :", userEmail);
} else {
  console.log("Email not Found!");
}

// We have compared nothing and a string "user@google.com" is considered as true value this is known as Truthy value
// [] empty array is considered as true
```

## 📍 falsy value

```javascript
userEmail = "";

if (userEmail) {
  console.log("Got the user email :", userEmail);
} else {
  console.log("Email not Found!");
}
```
- We have compared nothing and a empty string ```""``` is considered as false value this is known as Falsy value

| Falsy Value |
|-------------|
|```false``` || ```0``` || ```-0``` || ```bigint 0n``` || ```""``` || ```null``` || ```undefined``` || ```NaN``` |

- Rest all considered as Truthy value

| Truthy value |
| ```true``` || ```1``` || any character || any string || any num || any bignint number || ```[ ]``` || Empty function|| 
|| ```"0"``` || ```'false'``` || ```" "``` || ```[]``` || ```{}``` || ```function(){}``` |


## 📍 ```[]``` empty array check

-  If ```[]``` array is considered as true then how we check array.

```javascript
const arr = [];
if (arr.length === 0) {
  console.log("array is empty");
} else {
  console.log("array is not empty");
}
```

> **We know ```Object.key()``` returns ```[]``` of keys & value.

## 📍 ```{ }``` empty object checks

```javascript
const myObj = {};
if (Object.keys(myObj).length === 0) {
  console.log("Object is empty");
} else {
  console.log("Object is not empty");
}
```

## 📍 ```false == 0``` ==> ```true```

```javascript
if (false == 0) {
  console.log("Hello false == 0");
}

if (false === 0) {
  console.log("Hello false === 0");
}
```

➜ ```false == 0```   -> ```true```; <br/>
➜ ```false == ""```  -> ```true```; <br/>
➜ ``` 0  == ""```  -> ```true```; <br/>


---
**Page-4**
📙📗📕📘📒

## 🚀 NullishCoalscing operator ```val1 = null ?? 10;```

- Nullish Coalescing Operator (??) : ```null``` ```undefined```
- Here everything is defined on 2 keywords ```null``` and ```undefined```

- Does it make sense if the 1st value is assigning to val1?
- Why to use it?
- Many a time when you call from database or when you use firebase or appwrite then you didn't get response directly you get 2 values
so there may be chances you get null as response or no response i.e.
undefined in those cases your code structure flow will break so for those cases only 5 ?? 10 specially

```javascript
let val1;
val1 = 5 ?? 10;
console.log(val1); //5
//Does it make sense if the 1st value is assigning to val1?
// why to use it?
// many a time when you call from database or when you use firebase or appwrite then
// you didn't get response directly you get 2 values so there may be chances you get null as response or no response i.e.
// undefined in those cases your code structure flow will break so for those cases only 5 ?? 10 specially

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
```

> **Note : nullish Coalescing operator and Ternary operator both are different-2 things. Don't get confused that they are same.**


---
**Page-5**
📙📗📕📘📒

# 🚀 TERNARY OPERATOR

## Ternary operator
- It is just shorthand of ```if( ){ }else{ }```
- ```condition ? true : false```
- It is different in design, pattern and goal.

```javascript
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
```

---
**Page-6**
📙📗📕📘📒


[Prev]() [Next]()
