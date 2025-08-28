# 🚀 Promise in JavaScript

- The concept of dot(.) then and dot(.) catch make from promises, and also which is also an internal tool known as ***```fetch()```*** which replaces 
```javascript
const xhr = new XMLHttpRequest();
xhr.open("GET", requestURL);
```

- ```fetch()``` is not that simple how it looks. It does a lot of works behind the scene. we will understand it through the promises.

- In JavaScript the concept of Classes are not there, yes now a days come but very few. <br/>
  In JavaScript almost everything is seen as an Object Reference or protoype reference.

- Don't carry the baggages of Java/C++/Python classes Object concepts, as you see new keywords in your mind the idea of class and object pops out. <br/>
  That's not the case here in JavaScript. Every language is different.

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

- The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

- It is not necessary all the works done right now. <br/>
  There are various work which are not performed at much speed on disk as like programming calculations do happen or programming interpretation happen. <br/>

For example : <br/>
- If you want to access file from the system, then file can't access directly through programme. <br/>
  You need to have access to kernal, then kernal will give you you the file.
- Sometime operations are calculative, if you requested database then it might be possible your database is on another continent from there
   you will get the response so obviously It will take more time.
- Cryptography also takes time as you encrypt or decrypt the password.

- Like these there are various real world operations where we do Asynchronous programming which means it's directly not possible.
  Here we have 2 options <br/>
1. either use Async await - until the job is done wait. <br/>
2. or Use Promises in modern programming. <br/>

## 📍 Promises will be completed in future.

- A Promise is in one of these 3 states:- <br/>
a) pending <br/>
b) fulfilled <br/>
c) rejected <br/>

- There are two part oof Promises <br/>
1. Creating  Promises <br/>
2. Consuming Promises <br/>

- We create promises but in most of the cases we consume promises. Like <br/>

```javascript
fetch('https://www.something.com').then().catch().finally();
```

```javascript
const promiseOne = new Promise();
```
- We have a Promise object through which we can create a new instance of Promise. This was not available earlier before ES6.

- When Promises were not directly available inside JavaScript then there were promise libraries like Q or BlueBird.

---
**Page-1**
📙📗📕📘📒

## 📍 ```fetch()``` in JavaScript

```javascript
fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log("Error!!"));
```
- ```fetch()``` is a very exciting feature of NodeJS.
- Before that request before that ```XMLHttpRequest``` was there.
- As ```fetch()``` comes in native NodeJS all paradigm change of sending web request.

[fetch](https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/fetch)

## 📍 ```fetch()```

- A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. <br/>
- A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.) <br/>
- Instead, a ```then()`` handler must check the Response.ok and/or Response.status properties. <br/>

[fetch-method](https://fetch.spec.whatwg.org/#fetch-method)

<img width="1173" height="547" alt="image" src="https://github.com/user-attachments/assets/bb8b8e3a-0386-4e2f-99bd-7d78a11218ed" />


- 👆 In JS Engine, we have **Memory Heap**  and **CallStack**, All the functions comes on top of **Global Execution Context**, on top of that 
we keep putting **functional execution context** and execute it from top. <br/>

- But few functions are special what they do is special request from call stack which is Web APIs request like <br/>
```setTimeout()``` -> What setTimeout does is register Call Backs and there also a thing known as Task Queue, <br/> 
in which all the call backs are stored and as the of execution came, there is an automatic event loop which continuously <br/>
checks task queue is filled or not and call stack is empty or not if yes then times up or wait. 

> **Note : ```fetch ()``` executes first and rest all after ```fetch()``` we have seen this strange behaviour in our code excecution. <br/>
This is becacuse this ```fetch()``` Queue is a special queue, only and only for ```fetch()``` this is known by different different names like <br/>
Micro Task Queue or Priority Queue or Fast Queue.

- Whatever task is done through ```fetch()``` that will come in priority queue and as it is a promise object. <br/>
  This queue priority is high so Its result will come first. <br/>
  Like a VIP line which added first in Call Stack. <br/>

<img width="763" height="364" alt="image" src="https://github.com/user-attachments/assets/a8ba2f56-d8c4-4f34-b7b3-d6c59b74e8df" />

- ```fetch()``` does all its job, even we can pass objects in ```fetch('something',obj)```

- But Fetch internal working mechasim is divided into 2 parts : <br/>
1. Reserving space for Variable and Data. <br/>
➜ First part is for reserving memory space. <br/>
➜ Onfulfilled[ ] is Promise Resolve. <br/>
➜  OnRejected[ ] is Promise Reject. <br/>

These both are arrays and you're not allowed the push the value directly in these array as they are private fields you can't access them. <br/>

2. Web Browser/ Native Node. <br/>
➜ another part goes in handling browser APIs or Node APIs. <br/>
➜ From here a Network request goes. <br/>

> **Note: We can't set fire a network request diretly for that we need a resource in between either Browser or NodeJS env.**

➜ from here you get a network request, now you got network request, now 2 things can happen either data goes on network or not go on network. <br/>

➜ If It goes and any response came it always goes in ```Onfulfilled[]``` and if at all request doesn't go or request stucked in that case ```OnRejection```. <br/>

> **Note : Error Esp 404 file not found, you get this only after the request goes on network so it's basically a ```onfulfilled[]``` data.**

- This is Data is reserved in memory, initial value of this Data is empty or undefined.
- So what Onfulfilled or OnRejection does is when your job is done from network request, then from Network request either Onfulfilled or OnRejection will be fired.
- Inside these you get functions, and those functions are responsible for fulfilling the data.
- We creates a variable response which is global.
```javascript
response = fetch('something').
```
- So It is data responsibility to fulfilled the response.

---
**Page-2**
📙📗📕📘📒

[Prev]()  [Next]()
