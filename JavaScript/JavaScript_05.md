# 🚀 API

➜ Basically If you want your job to be done by another person then Another person is API. <br/>
  Example : <br/>

➜ You went to a restaurant, you want to eat Cheese Chilly, then It's not your problem to from where cheese come how to make it in kitchen 
what are ingredient from where get the chef. <br/>
So the menu card in Restaurant is like a documentation of API read it and order that's it. <br/>

➜ Like Google login click, It doesn't your headache that how  google verify the user, email is correct or not etc etc so all these jobs are done through API.

- API is nothing just you get some values from backend and now you have to learn how to read/write or use it.

- Earlier those values you get in XML structure which was very complex now all those values comes in JSON.

## 📌 How does JSON look like?
- It is very easy.
- This is ```{ }``` JSON
```
{ 

}
```
- Yes, JSON is object only. It is just that this JSON doesn't have name right now.

```json
{
"name": "Chhotu",
"coursename": "Mathematics",
"price": 999
}
```
- Usually JSON has both Keys and Values are in string only yes numbers, true/false etc can be as it is.

➺  Like this you get the API call, Now you have JSON. <br/>
➺  Now you have to learn How to used fetch() etc in JavaScript. <br/>
➺  Through ```fetch()``` method you will call url and in response you will get the data. <br/>
➺  This is how you get values in API. <br/>
➺  Now you know Object, you can convert this in object and get the values. <br/>

- It is not necessary that you always get API in Objects only. 
- Sometime you will get API in Arrays format in that case so in that array there are many objects 
then in that case we have to extract the data from Array inside Object by looping on array then get values from each object.

- One API is very famous Randomuserme api google it [Randomuserme](https://randomuser.me/)

## 📌 JSON
- The JSON file you will see in not easy to understand you have to read it very carefully.

- There are online tools available, you can make your own as well. Now paste your result and study the code easily as it is formated.

- All the APIs are in JSON format only these days. Now you don't have doubt that this is looking like Object why're you saying it JSON, 
- It is looking like array why are you calling it as JSON. Because JSON is simply JavaScript Object notation.
- It is not only limited to JavaScript. 
- It runs in whole APIs Industry whether you write in Ruby On rails or PHP, You have to send Objects in JSON format only.

How do we do that? We will see it later on.

---
**Page-1**
📙📗📕📘📒

# 🚀 Functions

- Function simply means the code you written 5 lines, 10 lines, 100 lines. 
- Pack them in a package.
- Now you can use that package as many time and wherever you want.
- Write once, Use as many time as you wish. 

```javascript
 console.log("A");
 console.log("B");
 console.log("C");
 console.log("D");
 console.log("E");

console.log("----------");

function englishAlphabets() {
  console.log("A");
  console.log("B");
  console.log("C");
  console.log("D");
  console.log("E");
}
```

## 📌 function declaration | function name | function definition

```javascript
const funReference = englishAlphabets; // function reference, It's not executed automatically until you call
console.log(funReference); //[Function: englishAlphabets]

englishAlphabets(); // function call

function addTwoNum(num1, num2) {
  console.log(num1 + num2);
}

addTwoNum(); //NaN Not a Number, This is bcuz we didn't pass argument to function
addTwoNum(3, 7); //10
addTwoNum(3, "7"); //37 JavaScript automatic implicit type conversion
addTwoNum(3, "a"); //3a JavaScript automatic implicit type conversion
addTwoNum(3, null); //3 JavaScript automatic implicit type conversion

// what we pass while calling a function is argument
// when we define a function what input we define is known as parameter
console.log("------------");

// In JavaScript functions are very interesting
const result = addTwoNum(2, 4); //6 you can store function in a variable
console.log("result: ", result); //6 but result hold undefined
console.log(typeof result); // undefined
```
- What we pass while calling a function is **argument**.
- When we define a function what input we define is known as **parameter**.
- We can store function in a variable.
  
```javascript
function addTwoNum1(num1, num2) {
  let result = num1 + num2;
  return result;
}
const result1 = addTwoNum1(2, 4);
console.log("result1: ", result1); //6
console.log(typeof result1); // number, now this is not undefine bcuz function return the value
// Rule of function syntax, after return statement nothing will execute

function addTwoNum2(num1, num2) {
  return (result = num1 + num2);
}
```
## 📌 Scope of Variable

```javascript
function loginUserMessage(username) {
     return `${username} logged in Successfully!`;
}

loginUserMessage("Rohit"); //It will print nothing, yes function executed but you didn't stored or printed it.

console.log(loginUserMessage("Ankit")); //Ankit

const user1 = loginUserMessage("Sachin");
console.log(user1); //sachin

const user2 = loginUserMessage();
//If you don't pass argument then function take it undefined as argument and print it accordingly
console.log(user2); //undefined
//to handle this you can check the value before function start executing with undefined

function loginUserMessage1(username) {
  if (username === undefined) {
    console.log("Please enter a username");
    return;
  }
  return `${username} logged in Successfully!`;
}

const user3 = loginUserMessage1(); //Please enter a username
console.log(user3); //undefined
```

## 📌 JavaScript ```false``` Value

- In JavaScript few things are considered as false like : 

```false``` is false obviously. <br/>
```""```, ```''```, ``` `` ``` empty string is considered as false value. <br/>
```null```  is considered as false value. <br/>
```undefined``` is considered as false value. <br/>

```javascript
function loginUserMessage3(username) {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} logged in Successfully!`;
}

console.log(loginUserMessage3());
console.log(loginUserMessage3(false));
console.log(loginUserMessage3(null));
console.log(loginUserMessage3(undefined));
console.log(loginUserMessage3(""));
console.log(loginUserMessage3(""));
console.log(loginUserMessage3(``));
```

## 📌 Default Value in function parameter

- Suppose this type of situation you want to avoid then you can give default value.

- Now if you don't put anything the default value is John not undefined.

```javascript
function loginUserMessage4(username = "John") {
    return `${username} logged in Successfully!`;
}
console.log(loginUserMessage4());
console.log(loginUserMessage4("Sam"));
```
---
**Page-2**
📙📗📕📘📒

# 🚀 Functions with Objects and Array

- In Project, usually in eCommerce you see shopping cart.
- In shopping cart user add, add, add again add you don't know how many items users can add in shopping cart and you just have to add price of all items.
- This situation is very common unlike you know you have 2 arguments ot 3 arguments.

```javascript
function addItemInCart(item1) {
  return item1;
}
console.log(addItemInCart(1)); //1
console.log(addItemInCart(100, 200, 500)); //100 but what about 200 and 500
// how to solve this problem
//for this we have rest operator
// ... is known as spread operator and this one also known as rest operator based on use case we call it spread operator or rest operator
//rest simply means whatever the items you get they are in retail you have to pack them in a bundle and then give it to rest operator
function addItemInCart1(...item1) {
  return item1;
}
console.log(addItemInCart1(100, 200, 500)); //[100,200,500]

function addItemInCart2(val1, val2, ...item1) {
  return item1;
}
console.log(addItemInCart2(100, 200, 500, 600, 700)); // [500, 600, 700];

console.log("---------------------------------------------");
```

> ```...``` is known as ***spread operator*** and this one also known as ***rest operator*** based on use case we call it spread operator or rest operator. <br/>
Rest simply means whatever the items you get they are in retail you have to pack them in a bundle and then give it to rest operator.

## 📌 How to pass this object to a function?

```javascript
//objects
const user = {
  username: "Krishna",
  price: 199,
};
//How to pass this object to a function

function handleObject(user) {
  console.log(`username is ${user.username} and price is ${user.price}`);
}
handleObject(user);

handleObject({
  username: "Ram",
  price: 299,
});
```

## 📌 Passing Array to function

```javascript
// arrays
const arr = [100, 200, 300, 400];
function handleArray(newarr) {
  return newarr[1];
}
console.log(handleArray(arr)); //200
console.log(handleArray([56, 67, 23, 1, 45])); //67
```

---
**Page-3**
📙📗📕📘📒

[Prev]()  [Next]()
