# 🚀 Loops or Iterator

- ***Loop*** is a also known as ***Iterator***

- loop has 3 parts - ```initialization``` | ```condition``` | ```Update```

## 📍 ```for``` loop

**```for(initialization : condition check : update value)```** <br/>
➝ initialiaze a variable from which your loop starts executing. <br/>
➝ check condition whether it's true or false to run the loop. <br/>
➝ update the condition like increment or decrement to end the loop otherwise it'll run infinite times. <br/>


```javascript
//for loop

for (let i = 1; i <= 10; i++) {
  const element = i;
  console.log(element);
  // after this line i++
  //then condition check i < 10
  // if true then code execute otherwise out of loop
}
```

## 📍 ```if()``` inside loop

-  ```for``` loop body { } has its scope you can't access i or element outside for loop.
  
```javascript
for (let i = 1; i <= 10; i++) {
  const element = i;
  if (i === 5) {
    console.log("We reached till 5");
  }
  console.log(element);
}
```

## 📍 loop inside loop

```javascript
for (let i = 1; i <= 10; i++) {
  console.log(`\nOuter loop i = ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`Inner loop i = ${i} j = ${j}`);
  }
}
```

## 📍 Multiplication | Tables 

```javascript
for (let i = 1; i <= 10; i++) {
  console.log(`Table of ${i} `);

  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
```

## 📍 Loop on Array

```javascript
let myArray = ["Banguluru", "Mumbai", "New Delhi", "Chandigarh", "Indore"];
// myArray  = [    0,          1,          2,            3,          4    ]
console.log(`myArray length = ${myArray.length}`);
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}
```

## 📍 ```Break``` in loop

- It is not necessary to run loop from start to end as we get something we want to exit the loop.

```javascript
for (let i = 1; i <= 20; i++) {
  if (i === 5) {
    console.log(`${i} detected!`);
    break; //out of loop
  }
  console.log(`value of i is ${i}`);
}
```

## 📍 ```continue``` in loop

```javascript
for (let i = 1; i <= 20; i++) {
  if (i === 5) {
    console.log(`${i} skipped, continue`);
    continue; // Ignore just one time
  }
  console.log(`value of i is ${i}`);
}
```

---
**Page-1**
📙📗📕📘📒

- Loop has 3 parts - ```initialization``` | ```condition``` | ```Update```

➝  initialiaze a variable from which your loop starts executing. <br/>
➝  check condition whether it's true or false to run the loop. <br/>
➝  update the condition like increment or decrement to end the loop otherwise it'll run infinite times. <br/>

## 📍 ```while()``` loop

```javascript
initionliazation;
while (condition) {
    update;
}
```

```javascript
//while loop

let i = 2;
while (i <= 20) {
  console.log(`i = ${i}`);
  i = i + 2;
}
```

## 📍 Array through while loop

```javascript
let myArray = ["Krishna", "Arjuna", "Bhima", "Karna", "Drona"];
let index = 0;
while (index < myArray.length) {
  const element = myArray[index];
  console.log(`myArray[${index}] = ${element}`);
  index++;
}
```

## 📍 ```do( )while``` loop 

 - The name itself says first ***```do```*** then ***```while(condition)```*** will check
 - So at least one time loop will run for sure
 - After that condition will check at the end then based on ```true/false``` It is decide whether loop will run again or not.

 - It is rarely used! 
 
```javascript
let score = 0;
do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10);
```

```javascript
score = 100;
do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10);
```


---
**Page-2**
📙📗📕📘📒


# 🚀 High Order Array Loops

- These loops are specific to arrays and objects.

- In JavaScript Arrays and Objects are very powerful & popular.


- Strings inside array ```["", "", "", ""]```

- Objects inside array ```[{}, {}, {}, {}]```

- It is very common scenario that you have string and objects inside the array now you have to get elements from the array be it string or Object.

- So, first iterate through loop 
then go inside object and using dot(.) or [] notation to get the values.

## 📍 ```for of``` loop
```javascript
for (const element of object) {
    
}
```

```javascript
// for of loop

const arr = [1, 2, 3, 4, 5];

for (const i of arr) {
  console.log(i);
}

const vowels = "AEIOU aeiou";
for (const vow of vowels) {
  console.log(`Each vowel ${vow}`);
}
```

## 📍 ```MAP <key, Value>```

- Maps are like Arrays only, but little different in terms of iterations
- It is a array with unique values

- Map is in itself an Object which hold key value pairs and remembers original insertion order of the keys unlike objects doesn't remember the order.

- No duplicate values in Map

```javascript
const myMap = new Map();
myMap.set("IND", "India");
myMap.set("IND", "India");
myMap.set("IND", "India");
myMap.set("JAP", "Japan");
myMap.set("FRA", "France");
myMap.set("RUS", "Russia");

console.log(myMap); // no dupliucates and order will be same

console.log("-----------for of loop on Map-------------");
for (const key of myMap) {
  console.log(key); // array
}
//Array de-structuring
for (const [key, value] of myMap) {
  console.log(key, ":", value); // key-values
}
```

## 📍 ```for of``` loop on object not allowed

```javascript
// Object
const myObject = {
  India: "New Delhi",
  Japan: "Tokyo",
  USA: "Washington DC",
  China: "Beijing",
};

// for (const [key, value] of myObject) {
//   console.log(key, ":", value);
// } // myObject is not iteratable
```

## 📍 ```for in``` loop on array 
```javascript
// for in loop on array
let myarr = ["js", "py", "cpp", "rb", "swift"];
for (const element in myarr) {
  console.log(element); // index instead of element
}
```
## 📍 Array's key?

- What is array's keys?
- when you read documentation you will know that actually Object designed for this purpose only because array keys starts with 0 and by default It's number.
- But we wanted to store any key not just number, In object we can put any keys as we wish.

```javascript
for (const key in myarr) {
  console.log(myarr[key]); // index instead of element
}
```
> **```for``` in loop on Map will work.**

---
**Page-3**
📙📗📕📘📒

#  🚀 Object

```javascript
const myObject = {
  js: "javascript",
  py: "python",
  cpp: "c++",
  rb: "ruby",
  swift: "swift by app",
};

// myObject is not iteratable
// then how to iterate on object
// for in () loop
// Note : It is not only limited to object we use it in other places as well
```
## 📍 Access Keys and Values of an Object

```javascript
//keys of object
for (const key in myObject) {
  console.log(key); //keys
}

//values of object
for (const key in myObject) {
  console.log(myObject[key]);
}

//keys  + values of object
for (const key in myObject) {
  console.log(key, ":", myObject[key]);
}


for (const key in myObject) {
  console.log(`${key} : ${myObject[key]}`);
}
```

## 📍 ```for in``` loop on array 

```javascript
// for in loop on array
let myarr = ["js", "py", "cpp", "rb", "swift"];
for (const element in myarr) {
  console.log(element); // index instead of element
}
```
-  Note : Array's key?

-   What is ***array's keys***? <br/>
      When you read documentation you will know that actually Object designed for this purpose only because array keys starts with 0 and by default It's number. <br/>
      But we wanted to store any key not just number, In object we can put any keys as we wish. 


```javascript
for (const key in myarr) {
  console.log(myarr[key]); // index instead of element
}
```

## 📍 ```for in``` loop on ```Map``` - not allowed as map is not a iterator

```javascript
const myMap = new Map();
myMap.set("IND", "India");
myMap.set("IND", "India");
myMap.set("IND", "India");
myMap.set("JAP", "Japan");
myMap.set("FRA", "France");
myMap.set("RUS", "Russia");

for (const key in myMap) {
  console.log(key); // as map key is an array
}
//No error but Map is not iteratble
```

---
**Page-4**
📙📗📕📘📒

# 🚀 ```for each``` loop

- ```for each``` is Most used loop. 
- When it comes to array some loops are added into array properties itself bcuz it is obvious if array come then we need loop to iterate.

- ```for each``` is a higher order function.

## 📍 ```for each``` normal function loop

```javascript
const myArr = ["js", "ruby", "java", "python", "cpp"];
// lang.forEach( function name() { } )
// callback function doesn't have any name
//lang.forEach( function (item) { console.log(item);} )
myArr.forEach(function (item) {
  console.log(item);
});
```

## 📍 ```for each``` loop arrow function

```javascript
// greet = () => { console.log("Hello Ji"); }
// myArr.foreach( (element) => { console.log(element) }; )
myArr.forEach((item) => {
  console.log(item);
});
```
## 📍 passing function in ```forEach``` loop

```javascript
function printMe(item) {
  console.log("Hey, Printing array's element :", item);
}

myArr.forEach(printMe); // here we are just giving reference it automatically does the work of calling it.
```

## 📍 ```forEach``` loop with multiple arguments

- function inside forEach: It doesn't only get item,it has index even whole array

```javascript
myArr.forEach((item, index, arr) => {
  console.log(item, index, arr);
});
```

## 📍 Object inside array ```forEach``` loop

-  object inside array here forEach used mostly.
-  This is very common operation like data we received from database come in arrays format only and every value is an object.

```javascript
const user = [
  {
    userid: "01",
    username: "user1",
    usermail: "user1@dot.com",
  },
  {
    userid: "02",
    username: "user2",
    usermail: "user2@dot.com",
  },
  {
    userid: "03",
    username: "user3",
    usermail: "user3@dot.com",
  },
];

user.forEach((item) => {
  console.log(item.userid, item.username, item.usermail);
});
```

---
**Page-5**
📙📗📕📘📒

# 🚀 filter, map and reduce

- What does forEach return if we store it in variable - ```undefined```

```javascript
const coding = ["c", "c++", "java", "python", "javascript"];

// what does forEach return if we store it in variable
const values = coding.forEach((item) => {
  console.log(item);
});
console.log(values); //undefined
// if you want to return something through function in forEach then even if you use return under function it will return nothing you will get undefined

const values1 = coding.forEach((item) => {
  //console.log(item);
  return item;
});
console.log(values1);
```
> **if you want to return something through function in ```forEach``` then even if you use ```return``` under function it will return nothing you will get ```undefined```.**

-  if we want to return each value instead of just printing
-  then what is the solution for this problem?

## 📍 filter map reduce

```javascript
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//like forEach we have filter operation

//basic
let newNums = myNums.filter((num) => num > 4);
console.log(newNums);

let newNums1 = myNums.filter((num) => {
  return num < 6;
});
console.log(newNums1);
```

- now you want to do same job but in forEach loop only?

```javascript
const nums = [];
myNums.forEach((num) => {
  if (num > 4) {
    nums.push(num);
  }
});
console.log(nums);
```

## 📍 Books exercise through ```filter```

- Object array - same types of values you get from database

```javascript
const books = [
  { title: "Book 1", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book 2", genre: "Non-Fiction", publish: 1991, edition: 2005 },
  { title: "Book 3", genre: "History", publish: 1999, edition: 2006 },
  { title: "Book 4", genre: "Science", publish: 1985, edition: 2007 },
  { title: "Book 5", genre: "Fiction", publish: 1998, edition: 2008 },
  { title: "Book 6", genre: "History", publish: 2001, edition: 2009 },
  { title: "Book 7", genre: "Non-Fiction", publish: 2005, edition: 2001 },
  { title: "Book 8", genre: "Fiction", publish: 2010, edition: 2010 },
  { title: "Book 9", genre: "Fiction", publish: 2014, edition: 2020 },
  { title: "Book 10", genre: "History", publish: 2019, edition: 2025 },
];

let userBooks = books.filter((bk) => bk.genre === "History");
console.log(userBooks);
userBooks = books.filter((bk) => {
  return bk.publish > 2000 && bk.genre === "History";
});
console.log(userBooks);
```

---
**Page-6**
📙📗📕📘📒

## 📍 ```map()``` method

```javascript
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = myNumbers.map((num) => num + 10);
console.log(result);

const table = myNumbers.map((num) => {
  return num * 5;
});
console.log(table);
```

## 📍 chaining

```javascript
const newNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNum = newNumber
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);
console.log(newNum);
```

---
**Page-7**
📙📗📕📘📒

## 📍 ```reduce()``` method specially used in shopping card

```javascript
const myNums = [1, 2, 3, 4, 5];

let mytotal = myNums.reduce(function (acc, curr) {
  console.log(`acc: ${acc} and curr: ${curr}`);
  return acc + curr;
}, 0);
console.log(mytotal);

mytotal = myNums.reduce((acc, curr) => acc + curr, 0);
console.log(mytotal);
```

- Shopping cart

```javascript
const shoppingCart = [
  { itemName: "JS Course", price: 2999 },
  { itemName: "Python Course", price: 999 },
  { itemName: "Mobile Course", price: 5999 },
  { itemName: "DSA Course", price: 1999 },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);
```

---
**Page-7**
📙📗📕📘📒

[Prev]() [Next]()

