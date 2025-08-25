Section-2 

#  🚀 Array in JavaScript


## 📌 Array 

```javascript
myArr = [0,1,2]
myArr1 = [0,1,true,false,"Abc", 1.01,[a,b,c]]
```
- JavaScript arrays are resizable and heterogenous also.

- Array indexing start from 0
```Arr[0]``` <br/>
```Arr[1]``` <br/>
```Arr["one"]``` not allowed! <br/>

> **JavaScript array-copy operation create shallow copies.**

## 📌 Deep Copy and Shallow Copy

- **Deep Copy?** <br/>
➜ Properties do not share the same reference means pass by value, changes in copy doesn't make any changes in original
because it is a separate copy from original one.

- **Shallow copy?** <br/>
➜ Shallow copy of an object is a copy whose properties share same references as those of source object from which the copy was made. <br/>
➜ Basically means same reference point, what changes we will made in copy same will happen in original as well.

## 📌 Array basics

```javascript
//Array basics

const myArr = [0, 1, 2, 3, 4];
const cities = ["Mumbai", "Delhi", "Chandigarh"];
console.log(myArr[0]);
console.log(cities);

const myArr1 = new Array(1, 2, 3, 4, 5);
console.log(myArr1);
console.log(myArr1.length);
```

## 📌 Array methods

```javascript
// Array methods

const arr = [1,2,3,4,5];
arr.push(6); //push element into arr
console.log(arr); //[1,2,3,4,5,6]
arr.push(7);
console.log(arr); //[1,2,3,4,5,6,7]
arr.pop(); //simply remove and return last element
```

## 📌 ```shift()``` and ```unshift( )```

- ```unshift( )``` : <br/>
   insert element in start but problem with this we have to shift all the element in arr,  <br/>
   here only 5 element but what if 1000 elements It's time consuming.  <br/>

- ```shift()``` : <br/>
   remove the first element of arr. <br/>

```javascript
const arr = [1, 2, 3, 4, 5];
arr.unshift(9); //insert element in start but problem with this we have to shift all the element in arr
console.log(arr);
arr.shift(); //remove the first element of arr
console.log(arr);
```

## 📌 ```includes( )```, ```indexOf( )``` and ```join( )```

```javascript
const arr = [1, 2, 3, 4, 5];
console.log(arr.includes(9)); //false
console.log(arr.indexOf(9)); //-1
console.log(arr.indexOf(5)); //4

const newArr = arr.join(); //bind element with comma separated & converts arr into a string

console.log(arr);
console.log(typeof newArr);
```
## 📌 Difference between ```slice()``` and ```splice()```  

- slice and splice and difference is asked in interview.

- ```slice() ``` doesn't include the last range of array.
- ```splice() ``` include the last range + remove the element from original array.

```javascript  
const myArr = [1, 2, 3, 4, 5];
console.log("A", myArr);

const myArr1 = myArr.slice(1, 3); //last range doesn't include
console.log(myArr1);
console.log("B", myArr);

const myArr2 = myArr.splice(1, 3); //last range include + remove the element from original arr
console.log(myArr2);
console.log("C", myArr);
```

## 📌 ```push()```
- ```push()``` will append the element at last of an array.

```javascript
const marvel_heroes = ["thor", "Ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];
//push()
marvel_heroes.push(dc_heroes); //dc_heroes arr will be appended as last of marval_heroes not merged!
console.log(marvel_heroes);
console.log(marvel_heroes[3]); //an arr
```

## 📌 Array Concatination ```concat()```
- unlike push, concat return a new arr
```javascript
//concat()
const all_heroes = marvel_heroes.concat(dc_heroes); // unlike push, concat return a new arr
console.log(marvel_heroes);
console.log(all_heroes);
```

## 📌 spread operator ```...```
- ```...``` is spread now it is not array all elements became individual so now we get spread values in new array
  
```javascript
//spread operator
const all_heroes1 = [...marvel_heroes, ...dc_heroes]; //... is spread now it is not array all elements became individual so now we get spread values in new array
console.log(all_heroes1);
```

## 📌 ```flat( )``` in this we pass the depth

```javascript
// flat
const arr = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]], 12];
const arr1 = arr.flat(1); //pass the depth
const arr2 = arr.flat(Infinity); //depth is infinity
console.log(arr);
console.log(arr1);
console.log(arr2);
```

## 📌 ```Array.isArray()```, ```Array.from()````, ```Array.of()```

```javascript
//Array.isArray() || Array.from() || Array.of()

console.log(Array.isArray("Shiva")); //false because we passed string
console.log(Array.from("Shiva")); // make array from string we pass
console.log(Array.from({ name: "Shiva" })); // [] It directly not convert it you have to tell you want keys array of values array or what
const myObj = { name: "Shiva" };
const entries = Object.entries(myObj);
console.log(Array.from(entries));

let subject1 = "Hindi";
let subject2 = "English";
let subject3 = "Maths";
console.log(Array.of(subject1, subject2, subject3));
```
---
**Page-1**
📙📗📕📘📒

# 🚀 Object in JavaScript

## 📌 What is an Object?
- ```{ }```
- In JavaScript Object always are in ```key: Value``` pairs.

## 📌 How to declare an Object?
- There are 2 ways of declaring an array :

**1. Like literals** <br/>
```javascript
const userList = {}
```

**2. like Constructor** </br>
```javascript
Object.create()
```

## 📌 Singleton Object

**Singleton** : Means, when you create an object through constructor then it is singleton object while 
when you create object like literals then that's not singleton, there multiple instances are made. <br/>

//singleton <br/>

//object literals <br/>

//Object.create() <br/>

```javascript
const myArray = ["User1",18,"user1@email.com"];
myArr[0]
myArr[1]
myArr[2]
// these can be changed in Object
 const user = {
 name: "user1", 
 age: 18,
 email: "user1@email.com"
 }
```
- Here by default system process name/age/email as "name"/"age"/"email" not name/age/email, 
 name/age/email are in itself a string but we do not write like this because system already consider that as string then why to write it.

- You can provide put value whatever you want string, boolean, array, function, another object.

```javascript
 const user = {
 0: "user1",
 1: 18,
 2: "user1@email.com"
 }
 ```

const user = {
  name: "user1",
  age: 18,
  email: "user1@gmail.com",
  isLoggedIn: false,
  lastLoggedInDays: ["Mon", "Tue", "Sat"],
};

## 📌 How to access an object?
- Generally people think that ```user.name``` or ```user.age``` like we can access the object which is but there are good ways apart from this.
- This is not a bad ways but there are other good ways : 

```javascript
console.log(user.name); //user1
console.log(user["name"]); //user1
```
- 👆 Both are same then what is the limitation of accessing through dot(.)

```javascript
const user2 = {
  name: "user2",
  "full name": "Mr user2 kumar",
  age: 18,
  email: "user2@gmail.com",
  isLoggedIn: false,
  lastLoggedInDays: ["Mon", "Tue", "Sat"],
};
//console.log(user2."full name"); //Error, no chance to get access it through dot (*)
console.log(user2["full name"]); //user2
```

## 📌 Declare a symbol
```javascript
//Declare a symbol
const mySymbol = Symbol("Id");
const emp = {
  mySymbol: "Id",
  "full name": "Arun Kumar",
  salary: 50,
};
console.log(emp["full name"]);
console.log(emp.mySymbol); //Id
console.log(typeof emp.mySymbol); //string
console.log(emp[mySymbol]); //Undefined

//If you want to use mySymbol as the datatype symbol then you have only one way to put in a [mySymbol]

const emp1 = {
  [mySymbol]: "Id",
  "full name": "Arun Kumar",
  salary: 50,
};
console.log("----------------------");

console.log(emp1[mySymbol]); //Id
console.log(emp1); // Here you will see mySymbol type is [mySymbol]

emp1.salary = 100;
console.log(emp1.salary); //emp1.salary updated to 100

//Object.freeze(emp1);
emp1.salary = 150;
console.log(emp1.salary); //100 no changes in emp1.salary bcuz it is freeze no one can modify salary

console.log(emp1);

```
## 📌 Function in JavaScript

- In JavaScript Function is not less than everything which means there is no descrimination with function you can treat it as variable,
  there will be no difference.

```javascript
emp1.greeting = function () {
  console.log("Hello Emp1");
};
console.log(emp1.greeting); //function reference bcuz method is not called
console.log(emp1.greeting()); //Hello Emp1 bcuz method is called

console.log("-----------------");

emp1.greeting1 = function () {
  console.log(`Hello ${this["full name"]}`);
};

console.log(emp1.greeting());
console.log(emp1.greeting1());
```

---
**Page-2**
📙📗📕📘📒

# 🚀 Object

## 📌 Different ways of creating object

```javascript
const tinderUser1 = new Object();
console.log(tinderUser1); //{} no difference you will get the empty obj like Object have

const tinderUser2 = {};
console.log(tinderUser2); //{} empty object
```
- There is no internal difference between tinderUser1 and tinderUser2 though both are created differently.
- Only differece is the one which is created by ```new Object( )``` is singleton object while the one which is created through ```{ }``` is non-singleton object.

```javascript
const tinderUser = {};
tinderUser.id = "1a";
tinderUser.name = "Lord";
tinderUser.isLoggedIn = false;
console.log(tinderUser);
```

```javascript
const regularUser = {
  email: "abc@email.com",
  fullname: {
    userfullname: {
      firstname: "ABC",
      lastname: "Kumar",
    },
  },
};
console.log(regularUser.fullname.userfullname.firstname); //ABC
console.log(regularUser.fullname?.userfullname.middlename); //
```
-  ```?``` does protection if fullname doesn't exist, many a time when you get response from API then you use ? syntax in case if this value 
then do this otherwise if you don't have ? you will write every time if and else.

- In short It's kind of Ternary operator ```a > b ? a : b```

## 📌 Merge Object like array

```javascript
//Merge object like array
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

const obj3 = { obj1, obj2 }; // problem of objeect inside object
console.log(obj3);

const obj4 = Object.assign(obj1, obj2); // this is fine but you should give an option value {}
console.log(obj4);

const obj5 = Object.assign({}, obj1, obj2); //{} optional which is acting like a source and rest is source which are going to append in this empty object {} though it is optional but recommended in syntax guide.
console.log(obj5);

const obj6 = Object.assign({ 0: "start" }, obj1, obj2);
console.log(obj6);
```
## 📌 Best way is by using spread operator ```...```

```javascript
const obj7 = { ...obj1, ...obj2 }; //90% time we use it bcuz it's easy and latest one
console.log(obj7);
```
- **90% time we use it bcuz it's easy and latest one.**

## 📌 There is another syntax to get data values from database
```javascript
// There is another syntax to get data values from database
const users = [
  {
    id: 1,
    email: "abc@gmail.com",
  },
  {
    id: 2,
    email: "bcd@gmail.com",
  },
  {
    id: 3,
    email: "cde@gmail.com",
  },
];

console.log(users[1].email); //bcd@gmail.com
```

- Very important and interesting for any project when you use database here you get an array of keys of an object on which you can loop through.
  
```javascript
const tinderUser = {};
tinderUser.id = "1a";
tinderUser.name = "Lord";
tinderUser.isLoggedIn = false;
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

//if key/values doesn't exist in that case either you see it manually or you can simply ask object
console.log(tinderUser.hasOwnProperty("id")); //true
console.log(tinderUser.hasOwnProperty("salary")); //false
```
- if key/values doesn't exist in that case either you see it manually or you can simply ask object.

> **To know more about Object methods go to browser window**

---
**Page-3**
📙📗📕📘📒

# 🚀 Object

- Object concepts are  similar to API concepts.
- So having depth knowledge about Object helps you in API section.

## 📌 Object De-structuring

- Object De-structuring is important like when you learn React you will get an Object the you have to de-structure it and
 get the value easily instead of directly taking the value.

```javascript
const course = {
  coursename: "React",
  price: 499,
  instructor: "Mr Sir",
};
//course.instructor
//course["instructor"]
//Both ways are fine but sometime you need to make your code clean then you don't use course.price again & again buz you have to access these many a times

const { instructor } = course; // now after this you don't have to write course.instructor every time simply you can use instructor
console.log(instructor); //Mr Sir

const { coursename: cname } = course;
console.log(cname); // React
```
- This is what we known as **Object De-structuring**

- This is what happens in React.

```javascript
const navbar = (props.company) => {
    navbar(company = "Google")
}
   
const navbar = ({company}) => {
    navbar(company = "Google")
}
```

---
**Page-4**
📙📗📕📘📒
