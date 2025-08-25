Section 1 - Basics

# 🚀 JavaScript Basics

## 📍 Variables and Constant in JS

User inputs info, to process these we need to store those info in memory space for time we need something known as **Variables and Constants**.

Later on based on requirement  we store them in database, get back in optimize way. This is the whole game in programming.

**Constant** - store the data which are Once declare, we don't change time & again

**Variable** - Store the data which might be update or change.

## 📍 Naming convention of variables

Keywords are already defined under JavaScript compiler NodeJS or V8 Engine Syntax. keyword_1 then do this, keyword_2 then do that..... and so on.

**const**

- In JS, there is only one way to declare a constant that is with keyword **const**.

```javascript
  const accountId = 101;
```

## 📍 There are 2 ways of declaring variables - 

**1. let** 

**2. var**
   - Now we don't use var. There was a small problem with JavaScript that It didn't know the Scope in initial days. 

- So It overwrite it again & again if somebody use the same variable. Eventually they recommended to simply use let. It solved the problem of scope.

> **NOTE : Prefer not to use var because of issue in block scope and functional scope.**

 
```javascript
    let accountEmail = "user@email.com";
```


- In JS, since it is so safe that sometime without writing anything (let/var/const) reserve a variable memory although this is not a good way.

```javascript
    accountCity = "Mumbai";
```

## 📍 undefined
- If you declare a variable and didn't assign anything, JS considered it as undefined.

```javascript
    let accountState;
```

---
**Page 1**
📙📗📕📘📒

# 🚀 Datatypes and ECMA standards

- JavaScript evolved in last 10 years. There is a difference of 10 years old JS and today JS. <br/> 
Classes, Module, Arrow functions these were not there, Now It is.

- There're lots of code of old JS. So JS organization committee didn't want to waste older code base also if you're new It must be standard code even if new or old 
at the end all code run through Engine only. <br/>

So for this you write - **"use strict";** <br/>

It means all your code will be treated as newer version of JS.

```javascript
use strict; // treat all JS code as newer version

alert(2 + 5); // We're using nodejs, not browser
```

> **Always ensure code readability high**

```javascript
  console.log(2+3); console.log("hello");
  console.log(2 +
  3);
```

> **Note : In fact we use an extension Prettier - Code formatter to do this here automatically.**


✔ For documentation we generally prefer mdn but this not official rather it's by mozilla.

✔ For official JS doc visit tc39.es https://tc39.es/ecma262/2023/multipage/

✔ Standards of JavaScript is defined by ECMA organization.

---
**Page-2**
📙📗📕📘📒

# 🚀 Datatype Conversion

Conversion is Nightmare in JavaScript.

```javascript
let score = 99;
console.log(typeof score); //number
console.log(typeof (score));

score = "99";
console.log(typeof score);//string

let valueInNumber = Number(score);
console.log(typeof valueInNumber);//number
console.log(valueInNumber);//99
```
## 📍 NaN - Not a Number

NaN is a special type. <br/>
So don't rely on Number() for type conversion in JavaScript, JavaScript is having little bit of problem It's not strict that's why people use typescript.

```javascript
valueInNumber = Number("ab12");
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //NaN - Not a Number
```
```javascript
let id = null;
let newId = Number(id);
console.log(typeof newId); //number
console.log(newId); //0
```
```javascript
let rollNum = undefined;
let newRollNum = Number(rollNum);
console.log(typeof newRollNum); //number
console.log(newRollNum); //NaN
```
```javascript
let isLoggedIn = true;
let loggedIn = Number(isLoggedIn);
console.log(typeof loggedIn); //number
console.log(loggedIn); //1
```

## 📍 Basic Conversion 

**| Number() | String() | Boolean() |**

### 👇 Convert any datatype into number through ```Number( )```

```javascript
"10"  => 33
"10a" => NaN
true => 1
false => 0
null => 0
undefined => NaN
NaN => NaN
```

### 👇 Convert any datatype into boolean through ```Boolean()```
```javascript
1 => true
0 => false
"" => false
"ab" => true
null => false
undefined => false
NaN => false
```

### 👇 Convert any datatype into string through ```String( )```
```javascript
101 => "101"
true => "true"
null => "null"
undefined => "undefined"
NaN => "NaN"
```

---
**Page-3**
📙📗📕📘📒

# 🚀 Operation

## 📍 Basic Arithmetic Operations

```javascript
console.log("--------Basic Operations-------------");

let val = 11;
let negVal = -val;
console.log(negVal); //-11

console.log(7 + 2); //9
console.log(9 - 1); //8
console.log(8 * 3); //24
console.log(24 / 7); //6
console.log(24 % 9); //8
console.log(2 ** 3); //8
```

## 📍 Operations with String and Number 

```javascript
console.log("---------string and number------------");

let str1 = "hello";
let str2 = " world";
let str3 = str1 + str2;
console.log(str3); //hello world

console.log("1" + 2); // 12 string
console.log("1" + 2 + 2); // No it's not 14 string | 122 string
console.log(2 + 2 + "1"); // 41 string

console.log(1 + "2"); // 12 string
console.log("1" + "2"); // 12 string
console.log(1 + 2); // 3 number

console.log(3 + (((4 * 10) / 5) % 2)); //3 This is good for exam que not in real life
console.log(3 + (((4 * 10) / 5) % 2)); //3

console.log(7 - 2 + ((12 / 2 / (1 + 2)) % (3 * 1))); // 7 in Real life define your priority what you want to do first
```

## 📍 Tricky Conversions | operator precidence

```javascript
console.log("--------Tricky Conversions | operator precidence-------------");
console.log(true); //true
console.log(+true); //1
console.log(true+); //Error
console.log(+""); //0
```

```javascript
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.log(num1); //4
```

```javascript
let counter = 100;
counter++; //postfix operator
console.log(counter); //101
++counter; //prefix operator
console.log(counter); //102
```
```javascript
let count = 0;
console.log(count++); //0 after printing this line count become 1
console.log(++count); //2 before printing here count became 2
```

## 📍 Prefix operator and Postfix operator
```javascript
count=0;
count++;
++count;
```

- Read mdn docs [Expressions_and_operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators)


---
**Page-4**
📙📗📕📘📒

# 🚀 Comparison of Datatypes in JavaScript

```javascript
console.log("2" > 1); //true Here JS automatically convert "2" to a number
console.log("02" > 1); //true
```

This types of conversions many a time doesn't give predictable result.<br/>
So when you compare two values make sure data types of both values must be same. <br/>

TypeScript is a language which doesn't even allow compare two different datatypes. While JavaScript is not that strict. <br/>
If you make this kind of rule that you follows these things, there is no need to move to TypeScript. <br/>
TypeScript only give you strict rules that you must have to follow. <br/>


## 📍 Comparison

```javascript
console.log("-------------comparison-------------");

console.log(2 > 1); //true
console.log(2 < 1); //false

console.log(2 == 2); //true

console.log(2 != 1); //true

console.log("Hello" == "Hello"); //true
```
## 📍 Comparing two different datatypes

```javascript
console.log("-------Comparing two different datatypes-------");

console.log("2" > 1); //true Here JS automatically convert "2" to a number
console.log("02" > 1); //true

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true why? Here value convert
```

## 📍 Why ```null >= 0``` is 0 >= 0 which is true WHILE ```null > 0``` is false

- The reason is that an equality check == and comparisions >,<,>=,<= work differently
- comparisons >,<,>=,<= convert null to a number, treating it as 0
- That's why null >= 0 is 0 >= 0 which is true
- while null > 0 is false

```javascript
console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false
```

## 📍 Difference between == and ===

```==``` is a check which checks values not strict like ```===``` which also checks datatypes. <br/>
```===``` is a strict check which not only check values but also check value strictly which means check datatype also. <br/>

```javascript
console.log("------ == vs === --------");

console.log("2" == 2); //true
console.log("2" === 2); //false
```

---
**Page-5**
📙📗📕📘📒


[Prev]() [Next]()
