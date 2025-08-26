# 🚀 JavaScript Projects

➜  These projects are good but without learning events in JavaScript, DOM Projects are not possible. <br/>

➜  Basics of Events we will learn while making projects. <br/>

[CodeSandbox.io](https://codesandbox.io/) <br/>
➜ you can create JS template and share with people to practice inside browser only no need to install or configure the environment. <br/>

[GitHub CodeSpace](https://github.com/features/codespaces/) <br/>

[StackBlitz.com](https://stackblitz.com/), similar to CodeSandbox this website also have same features. <br/>

- Create an account, then if you make changes it will be saved otherwise

## 📍 Events
- Inside browsers there are various events <br/>
```page load``` <br/>
```page refresh``` <br/>
```Cursor movement``` <br/>
```clicking anywhere```  <br/>
```closing tab``` <br/> 

- Event listener on the every element which we want.

- Why? <br/>
bcuz Events are there in browser but somebody is there to listen those events. <br/>
Event Listener means, I will listen all the events but I actually need is not all, so I listen particularly specific event. <br/>
```"anyElement".addEvenListener("event","call back");``` <br/>
```btn.addEvenListener("click", function(e){ });``` <br/>

- Whenever the event is happened you have to carry that event object, bcuz the event object has a lot of details.

---
**Page-1**
📙📗📕📘📒

# 🚀 Events in JavaScript

- In JavaScript all of the events run sequencially.
- JavaScript is a sequencially run language.
- But many a time, we ingore sequencially and go with Async programming, instead of synchoronous we do deviate few works and then come back.

- Similar to above, there is an exception in Browser Events.
- These events activate on any event, like mouse movement, keyboard press etc

## 📍 Event handling

- There are approaches to handle these events

## 📍 1st Approach events in HTML tag

```html
<img
            width="200px"
            id="owl"
            src="https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
            onclick="alert('owl')"
          /> 
```

- This approach is not good because this is not feasible when your application scale then there will be problems in this approach.
- So Avoid this approach of injecting events in HTML.

- Whereas in React this approach is feasible.

## 📍 2nd Approach - onclick in JavaScript

```html
<script>
    document.getElementById("owl").onclick = function () {
      alert("owl clicked");
    };
  </script>
```

- Is there any problem with this approach?
- Yes, looks good and works as well but when you apply onclick on event then there could be problems within onclick bcuz you don't get more information.
- So you should use eventListener bcuz eventListener not only give you onclick functionality but they give you many other things like ability to propagation. 

## 📍 3rd Approach - eventListener best approach 

```javascript
document.getElementById("owl").addEventListener(
      "click",
      function () {
        alert("owl clicked!");
      },
      false
    );
```
## 📍 4th Approach  - ```attachedEvent()```

- ```attachedEvent()``` This was used in early time when Internet Explorer was rushing, it was difficult to run on internet explorer.

## 📍 5th Approach - jQuery() - onEventListener(), jQuery was a framework like React 
- jQuery was a framework like React

## 📍 Important Points  

- Events are very Important to crack any JS Interview.
- When you click then find out windows height and width?, View? at what time it was clicked/timestampt?
- Make an application where as user click anywhere then give the time?
- Make an application where there is a div when you click anywhere in that div make a circle.
- you'll get the location x,y and positions create a new events and add a new tag. 

👆 All of these  questions are done through events only.

## 📍 Read the events which are more important

1. type
➜  keyboard type events 
➜  Mouse type events

2. timestamp <br/>
➜  date activities change

3. Default prevented <br/>
➜  change the default behaviour of anything. <br/>
➜  like when we submit form then we say to event to change the default bahaviour of sending the value to server.

4. target
5. toElement
6. srcElement - source element is very-2 important
7. currentTarget
8. clientX, clientY, screenX, screenY, offset <br/>
➜  client position related things which comes in interview
9. altkey | ctrlkey |shiftkey | keycode | <br/>
➜  recognize these keyboard keys <br/>
➜  research the keycode of A,B,C,D,E,F,G,..........,Z <br/>
➜  based on this you can make project like keyboard speed of typing/ right or wrong typing of a user  <br/>
 
```javascript
document.getElementById("owl").addEventListener(
      "click",
      function (e) {
        console.log(e);
      },
      false  //  Propogation
    );
```

## 📍 Event Propogation

- What is Event Propogation?
- There are 2 context of event Propogation
1. Event bubbling
2. Event Capturing

```javascript
document.getElementById("images").addEventListener(
      "click",
      function (e) {
        console.log("click inside the ul");
      },
      false
    ); //this will run when you click inside the image which means inside ul
    document.getElementById("owl").addEventListener(
      "click",
      function (e) {
        console.log("owl clicked");
      },
      false
    ); //this will run when you click on specifically owl but it's also under images so above one also run obviously
    // But which one run first?
    // It is the game of propogation, which is bubbling, bubble goes from down to up
    // inner element which is images then li then ul
```

- In market mostly used is default which is false, what we call it as event bubbling.
- But in few scenario we also have to use event capturing then in that case - 

```javascript
document.getElementById("images").addEventListener(
      "click",
      function (e) {
        console.log("click inside the ul");
      },
      true
    ); //this will run when you click inside the image which means inside ul
    document.getElementById("owl").addEventListener(
      "click",
      function (e) {
        console.log("owl clicked");
      },
      true
    ); // 
```
- Here after changing the default false propogation to true, which is capturing event, It goes from top to bottom first ```ul``` captured then owl.
- So It depends on your use case which is important for you capturing or bubbling. Nothing is right or wrong here.

## 📍 Change the default behavior of anchor tag of google

```javascript
    document.getElementById("google").addEventListener(
      "click",
      function (e) {
        e.preventDefault();
        e.stopPropagation();
        console.log("google clicked");
      },
      false
    );
```
scenario 

---
**Page-2**
📙📗📕📘📒

# 🚀 Async - JS fundamentals

- What is Asynchronous code?
- How it works?
- Where it is used?

➜  This is the basics which makes your foundation for Promises and Async await etc. <br/>

## 📍 Async Code

JavaScript is <br/>
- Synchronous , which means line by line code execution by default
- Single threaded, which means everything is executed in a single thread
  
Yes, slower than the languages which are multi-threaded but you will never feel that JS is single threaded bcuz various works are delegated & comes back. <br/>
Good thing is JS engine is never found alone, you will have a runtime environment (browser runtime env, nodeJS runtime env). <br/>
So standalone JS engine neither found nor somebody use.
➜ These are the default behaviour of JavaScript. <br/>
➜ Only default is not enough, so we have Execution Context. <br/>

## 📍 Excecution Context

```
Execute one line of code at a time
|
|
|----------> console.log("1");
|
|----------> console.log("2");
|
|
V
Each operation waits for the last operation to complete before executing.
```

## 📍 CALL STACK  and MEMORY HEAP

➜ Everytime Memory allocated, a call stack formed and a global execution context comes at a function top like this we get a STACK. <br/>

These are basics.

---
**Page-3**
📙📗📕📘📒

```
Blocking Code Vs Non-Blocking Code
	|			|
	|			|
	V			 -------> Doesn't block execution
Block the flow of program			|
	|						|
	|						V
	V					Read file Async
Read file Sync
```

- In Operating System, the nightmare for programming languages is to read any file.
- If you're doing calculation of Maths etc, there is no problems in programs. <br/>
  But but but As you say read a file or come back with file some data then problem created there.

- Bcuz in Operating System, you program cannot read the file, for that you have to give your context to your kernal then kernal goes and access the file <br/>
  and read the file after that kernal return back the execution context to your program and the job is done.

- Here, the kernal is not waiting for you bcuz kernal has many pending request from different-2 programs for a lot things to do. <br/>
  So for getting the access to kernal your program have to wait. <br/>
  So this is a problem bcuz till then your program can't do anything. <br/>

➜ When you read the file in synchoronous way, any how JavaScript Browser has no power to read the file but NodeJS has the access to file system. <br/>

➜ When you write blocking code and say that read the file, so whatever time it takes 1 sec/ 5sec/1 min/2min till then you have to wait, 
  your code can't do any other work. <br/>

➜ But if you're reading the file Asynchronously then your program can do other stuffs as the file read completed you will get notified. <br/>

➜ Most of us say, Non-Blocking code is best, bcuz our program read the file & other code as well without waiting which is the best way. <br/>
But but but <br/>
➜ If we get user data, we have to store that data into database and notify the user that the registered Sucessfully! <br/>

➜ You get the user data, you say I'm writing non-blocking code, as you wish saving in the database(It's a file only read-write data), <br/>
  I'm running other stuffs. But might be possible you could get error while reading/writing into database. <br/>
  But you sent the user notification Registered Sucessful in this case Non-blocking code is not good. <br/>

> **Nothing is good or bad, There are use cases.**

- Here, in this case we want to write blocking code that until we get response from the database for registered sucessful, 
after that we will notify user Registered Sucessfully.

<img width="757" height="438" alt="image" src="https://github.com/user-attachments/assets/6f039679-b083-4b31-b9d6-9298ba2aa982" />

- JS Engine, alone JS Engine.
- How does JS Engine make?
- Basically It is made up of Memory Heap and Call Stack.
- Actually in reality JS is Memory Heap + Call Stack that's it.This is what in execution context happens.
- But when you see in  execution environment like Browser, NodeJS, Deno those contains not only JS Engine (which is single threaded) <br/>
  It does contains so much of problems so that's why you're not given the JS Engine separately anywhere you can take it from github V8 Engine(designed in C++) <br/>
  but It also have Web API <br/>

## Web API

- Where does Web API found?
- Web API founds in browser, apart from browser nowhere you can find Web API.

- Apart from Web API many a times we are given an environment which is Node.
- So we can considered either Web API or Node.

- If It is web api you get the access of DOMAPI, If It is Node you will not get DOM API because there is DOM.

- So, One thing is Web API and another is Task Queu, this task queue makes the whole javascript fast and asynchronous.

- Apart from this we also have promises. These promises have different Queue which we call it as High Priority Queue or Promise Queue


In simple terms : <br/>
Whenever program runs call stack is created in that call stack Global Execution context created and one by one 
functions are loaded and as excecutions completed functions are unloaded in call stack. <br/>

In memory heap, memory allocation is happened. <br/>

When you write asynchronous type code the problem came  then you want a resource or mechanism that after doing this please remind me later, <br/>
so for all of these types of work we have Web API or Node API are available. <br/>

- Suppose  we have asynchronous APIs like ```setTimeout()``` ```setInterval()``` <br/>
Now you have a ```setTimeout()``` in your one function where does this ```setTimeout()``` found, It is in Web API or Node API. <br/>
So the call is transferred to Web API or Node API, there you will have a registered call back and for that also we have a task queue, <br/>
what it does is whatever the program execution set is outside the JS Engine put that inside in JavaScript Engine once again <br/>
Task Queue adds all the call backs into JS Engine call stack. <br/>

- There are few new APIs are added in JavaScript which are relatively new like ```fetch()``` API,
  fetch API is also does exactly same as  the Task Queue job but our Task Queue is expanded or another task queue is added <br/>
  which is of a high priority because inside ```fetch()``` there is a concept of promise which tells do this and notify it's successful or not. <br/>
  so these types of result get it through ```fetch()``` <br/>


---
**Page-4**
📙📗📕📘📒

# 🚀 Project with Async JS

## 📍 1st basic function is ```setTimeout();```
- It is a method, which call an API.
- In browser, when you see window object you will get a lot of options.
- It is actually a function but not core function. You will get it through browser. <br/>
  This is not part of core-javascript like in JS Engine we have call stack + Heap Memory but as you call setTimeout(), <br/>
  then execution context go outside and through event Task Queue return execution context return back to JS Engine. <br/>

```clearInterval()``` <br/>
```clearTimeout()``` <br/>
These are the part of ```setInterval()``` and ```setTimeout()``` <br/>
Important for Interview <br/>

## 📍 setTimeout(handler, timeout)

1. handler - what it does is It needs a handler. <br/>
Handler || callback ||function these are interesting terms in JavaScript almost same. <br/>
Like Handler is a function which doesn't have a name. <br/>

2. timeout - which is number in mili seconds <br/>

```javascript
<script>
    // setTimeout(function () {
    //   console.log("JavaScript");
    // }, 2000);

    // const print = function () {
    //   console.log("JavaScript");
    // };
    // setTimeout(print, 2000);

    const changeText = function () {
      document.querySelector("h1").innerHTML = "Best JS Series";
    };
    // setTimeout(changeText, 2000);

    const changeMe = setTimeout(changeText, 2000);
    //clearTimeout(changeMe);

    document.querySelector("#stop").addEventListener(
      "click",
      function () {
        clearTimeout(changeMe);
        console.log("Stopped!");
      },
      false
    );
  </script>
```
---
**Page-5**
📙📗📕📘📒

## 🚀 2 Projects

- Project 5 - Keyboard Clicked
- Project 6 - Background Change

## Notes

- Here, setTimeout, setInterval, clearTimeout, clearInterval these are the parts of Async code only buz main thread is not blocked here.

- It's not necessarily that in Async code means you have to send the request to web.

- Async in JavaScript itself build in.

- But It is not that JavaScript is by default JavaScript is Async, we have to make it Async using some API like ```setTimeOut()```.

- This is why on google you will see somewhere JavaScript Asynchronous programming language. It is because those APIs are coming together with JavaScript. <br/>
  But the default Engine of JavaScript that is not Async.

- Complete JavaScript runtime is allow Async. It runs on one thread only but still doing this tremendous job.

---
**Page-6**
📙📗📕📘📒

[Prev]()  [Next]()
