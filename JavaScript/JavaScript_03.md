If you want to master JavaScript, master 2 topics : <br/> 
**1. JavaScript Objects.** <br/>
**2. Browsers Web Events.**

# 🚀 Datatypes : Primitive & Non-Primitive
Datatypes are broadly divided into 2 categories based on how data is store/access in memory.

**1. Primitive Datatypes** <br/>
**2. Non-Primitive (Reference type) Datatypes**

To see difference there is a concept In C/C++/Java you must have heard ***call by value*** and ***call by reference***. 

## 📍 Primitive Datatypes
- Primitive Datatypes are call by value means when you call them you will not get their memory reference you get copy of it and whatever changes
  you will made that will happen inside copy.

1. ```number``` - 0,1,2,3, 10.0986 
2. ```string``` - "Hello"
3. ```boolean``` - true/false
4. ```null``` - it is empty, and it is type in itself.
5. ```undefined``` - you just have declared the variable, memory space allocated but what value you will put in it not decided/unknown.
6. ```symbol``` - symbol is used to make any value unique especially in Adv JS frontend.
7. ```bigint``` - scientific big numbers.

## 📍 Non-Primitive
- Reference type or Non-Primitive Datatypes, when you call them you will get their memory reference directly.

1. ```Array```
2. ```Object```
3. ```Function```


## 📍 ```typeof``` operator

| Type of val   |  Result |
|---------------|----------|
| undefined  | "undefined" |
| Null    | "object" |
| boolean  | "boolean" |
| number  | "number" |
| string  | "string" |
| symbol  | "symbol" |
| bigint  | "bigint" |
| object | "object" |
| function object  | "function" |

## 📍 Is JavaScript dynamically typed or statically typed language?

- **statically typed** : If you have to defined variable data type in a language, so It increase little bit safety like C/C++/Java

- **dynamically typed** : If you don't have to defined variable data type in a language like Python/JavaScript

- JavaScript doesn't force you to defined variable datatype.

- JavaScript's Brother === TypeScript, there you have to defined the datatype.

```javascript
const score = 100; //javascript
const score:number = 100; //typescript
```
- type safety is good thing, we will see it later on.

```javascript
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
} // object, whatever is inside the {} is object and inside
//an object you can store anything string, number, boolean, array or even another object

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
```
> **You can treat function in javascript like as a variable**

> **object, whatever is inside the {} is object and inside an object you can store anything string, number, boolean, array or even another object**

---
**Page-1**
📙📗📕📘📒

# 🚀 Stack and Heap Memory in JavaScript

In JavaScript the concept of memory and thread concept is tricky and complex.

## 📍 How does Memory works in JavaScript?
In Assembly, It was more difficult you have to think about memory every time. <br/>
In C/C++/Java the concept of reserve memory and free memory is the job of programmer. <br/>
But mid-modern and today's modern languages like JavaScript, Programmer are not provided with the more control over memory. 
It is the job of software(Compiler/Interpreter) do this job known as Garbage collection etc. <br/>

## 📍 2 types of memory in JavaScript
There are 2 types of memory. <br/>
- **1. stack memory** <br/>
➺ For all primitive datatypes stack memory is used. <br/>
➺ When stack memory is used you will get a copy of original value. <br/>
➺ One above another is stack.

- **2. Heap memory** <br/>
➺ For reference (non-primitive) datatype heap memory is used. <br/>
➺ When heap memory is used you will get reference of original value. <br/> 

```javascript
let name = "Shiva";
let newName = name;
console.log(newName); //Shiva

let name1 = "Shiva";
let newName1 = name;
newName1 = "Rama";
console.log(newName1); //Rama
console.log(name1); //Shiva
// Here we gave name1 refernce to myName1 So what will be value in name1=?

// As we know primitive datatypes used stack and it gives you a copy of original value not the reference you get the
//copy if you changed the value in newName1, then it will not change the value of name1

let user1 = {
  name: "abc",
  email: "abc@india.com",
};
//goes into Heap, get direct reference to original

let user2 = user1;

user2.email = "bcd@india.com";
console.log(user1); //email changed to bcd@india.com
console.log(user2); //email is bcd@india.com
```

---
**Page-2**
📙📗📕📘📒

# 🚀  String in JavaScript

## 📍 Modern Syntax of Strings 

- **double quotes```"```,  single quotes```'```,  back-tick ``` ` ```**

``` "hello" + " world"```
``` 'hello' ```
``` `hello` ```

## 📍 String Interpolation ``` `${1+"0"}` ```
- Modern Ways of printing string is through using back tick below esc key.
  
- Benefits of using it, You can inject placeholders directly through string interpolation by using $ dollar sign.

- Write an article about String Methods. It is important for Interview.

- String is very powerful in any language.
  
- So master all the methods of it.

```javascript
console.log("hello" + "world"); //helloworld
console.log("hello" + " javascript"); //hello javscript

const user = "Mr. Krishna";
console.log("hello" + " " + user); // hello Mr. X

const userId = 100;
console.log("your userid is " + String(userId)); //your userid is 100
```

## 📍 Declaring string through String constructor

```javascript
//Declaring string through String constructor
const name = new String("Brahma");
console.log(name[0]); //B
console.log(name.__proto__); //{} object
console.log(name.length); //6
console.log(name.toUpperCase()); //BRAHMA but this will not change our original string bcuz it's a copy not reference
console.log(name.charAt(2)); //a
console.log(name.indexOf("m")); //4

const str = "abcdefgh";
const newString = str.substring(0, 5);
console.log(newString); //abcde [0,1,2,3,4]

const newString2 = str.slice(-7, 4);
console.log(newString2); //bcd

const strTest1 = "   abc.   ";
console.log(strTest1); //with space
console.log(strTest1.trim()); //without space | trim() removes starting and ending spaces

const url = "https://google.com/elon%20musk"; // as browser doesn't spaces in url so it replaces " " with %20 now you want to replace %20
console.log(url.replace("%20", "-")); //https://google.com/elon-musk

console.log(url.includes("musk")); //true
console.log(url.includes("mark")); //false

const arr = "abc-def-ghi-jkl";
console.log(arr.split("-")); //['abc','def','ghi','jkl']
```

---
**Page-3**
📙📗📕📘📒

# 🚀 Number  in JavaScript

## 📍  ```toPrecision()```,  ```toLocaleString()```,  ```toLocaleString("en-IN")``` 

```javascript
const score = 100; //automatically defined
console.log(score); //number

const balance = new Number(100); // specifically casted in a Number
console.log(balance); //Number object

console.log(balance.toString().length); //3
console.log(balance.toFixed(2)); //100.00 //precision value

//use toPrecision() very carefully
const num = 23.8966;
console.log(num.toPrecision(3)); //23.9

const num1 = 123.8966;
console.log(num1.toPrecision(3)); //124

const num2 = 123.8966;
console.log(num2.toPrecision(4)); //123.9

const num3 = 1123.8966;
console.log(num3.toPrecision(3)); //1.12e+3

const hundreds = 100000000; //bit challenging to count 0's
console.log(hundreds.toLocaleString()); // to better readability of 0s USA standards thousand 100 thousand
console.log(hundreds.toLocaleString("en-IN")); // Indian Standard
```
## 📍 ```Number.MAX_VALUE```,  ```Number.MIN_VALUE```,  ```Number.EPSILON```

```javascript
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.EPSILON);
```

---
**Page-4**
📙📗📕📘📒

#  🚀 Maths in JavaScript

## 📍 Maths Library

- Math library comes with JavaScript by default.
- Powerful library : contains all Maths.

```abs()``` Absolute value which change any -ve or +ve num to +ve. <br/>
| -1/+1 | =>  1 <br/>

## 📍 ```Math.abs( )```      

```javascript
console.log(Math); //Math Object

console.log(Math.abs(-3)); //3
console.log(Math.abs(3)); //3
```

## 📍 ```Math.round( )```
```javascript
console.log(Math.round(4.3)); // 4
console.log(Math.round(4.6)); // 5
```

## 📍 ```Math.ceil( )```
```javascript
console.log(Math.ceil(4.2)); // 5 ceil means top
console.log(Math.ceil(4.9)); // 5 ceil means top
```

## 📍 ```Math.floor( )```
```javascript
console.log(Math.floor(4.2)); //4 floor means bottom
console.log(Math.floor(4.9)); //4 floor means bottom
```

## 📍 ```Math.sqrt( )```
```javascript
console.log(Math.sqrt(25)); //5 square root
```

## 📍 ```Math.pow( )```
```javascript
console.log(Math.pow(2, 5)); //32 power
```

## 📍 ```Math.min( )``` and ```Math.max( )```
```javascript
console.log(Math.min(5, 22, 100, 2)); // 2 min value

console.log(Math.max(5, 22, 100, 2)); // 100 max value
```

## 📍 ```Math.random()```
- **Return a pseudo random number between 0 and 1**

```javascript
console.log(Math.random()); // return pseudo random number between 0 and 1

console.log(Math.random() * 10 + 1); //min 1 to 10
console.log(Math.floor(Math.random() * 10 + 1)); //min 1 to 10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)));

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
```

---
**Page-5**
📙📗📕📘📒

# 🚀 Date and Time in JavaScript

## 📍 How date came existence in JavaScript?

➺ Arbitrary date Jan 1,1970. <br/>

➺ From there dates are calculated in JavaScript. <br/>

➺ Dates usually calculate in mili-seconds, this is why when we declare date variable it comes with a long string that's nothing 
but time in ms from the date Jan 1, 1970 to right now. <br/>

➺ Obviously It's easy to store them and compare them in mili-seconds. 
But It is not that easy! <br/>

➺ So, JavaScript suggest through tc39 w3 organization Consortium of JavaScript. <br/>

➺ They suggest Temporal API but it's not feasible yet, They're working on bring it on every browser like Math library. <br/>

➺  So, Today we have learn Date as in existing form only. <br/>


```javascript
let myDate = new Date();
//Date is a Object in JavaScript
console.log(typeof myDate); //object

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
```

## 📍 Specific Date in JavaScript

- If you want to declare a new specific date.

```javascript
//If you want to declare a new specific date
let newDate = new Date(2025, 0, 25); // month starts with 0 in JavaScript
console.log(newDate.toDateString());

let newDateTime = new Date(2025, 0, 25, 5, 3);
console.log(newDateTime.toLocaleString());

let newDate1 = new Date("2025-01-31"); //Here month starts at 01 not 00
console.log(newDate1.toDateString());

let newDate2 = new Date("01-01-2025"); //Here month starts at 01 not 00
console.log(newDate2.toDateString());
```

## 📍 TimeStamp in JavaScript
- TimeStamp is very useful especially to find exact timestamp value while designing quizes/poles who submitted faster should be the winner
   in these case we use timestamp.

- mili-second value from Jan 1, 1970 Now It is bit difficult to extract the value from this mili-second
- suppose you're building Hotel Booking App, Pole there we need to compare dates in that case.
- Now we can compre these two very easily.
- convert this into seconds using ```Date.now()```

```javascript
let myTimeStamp = Date.now();
console.log(myTimeStamp); // mili-second value from Jan 1, 1970 Now It is bit difficult to extract the value from this mili-second
// suppose you're building Hotel Booking App, Pole there we need to compare dates in that case

let myCreatedDate = new Date("01-15-2025");
console.log(myCreatedDate.getTime()); //
console.log(myTimeStamp);
//Now we can compre these two very easily

//convert this into seconds
console.log(Date.now()); //current date in ms
console.log(Math.floor(Date.now() / 1000)); // current date in second
```
## 📍 ```getDate()```, ```getMonth()```, ```getDay()```,  ```getSeconds()```

> **months starts with 0 not 1 here**

```javascript
let newDate3 = new Date();
console.log(newDate3);
console.log(newDate3.getDate());
console.log(newDate3.getMonth() + 1); //months starts with 0 not 1 here
console.log(newDate3.getDay()); //Mon 1
console.log(newDate3.getSeconds());

newDate3.toLocaleString("default", {
  weekday: "long",
});
```

---
**Page-6**
📙📗📕📘📒

[Prev]() [Next]()
