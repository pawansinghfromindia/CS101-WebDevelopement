 # 🚀 API  Request and V8 Engine
 
## 📍 API
- API is talking language between two systems.
- Like backend and frontend

- We can get API very easily and various ways :

GitHub API not all but public APIs <br/>
https://api.github.com/users/username <br/>

[Random User Me](https://randomuser.me/) <br/>

- Through Ajax <br/>
It is very difficult to read the API & We get API like this big only. <br/>
It is difficult to get the data from this API Object without formatting it. <br/>

- For this we have many websites like [JSON formatter](https://jsonformatter.org/)
- See the tree of it
```
object,
 - result[1] which is an array
 - info{4} which is in itself an object

In result only on element,
So basically we have to look for results[0] 0th position
On 0th position we have again 12 objects
gender: female
name{3} which is further an object 
	title: Mrs.
	first: Ayse
	last:Bayindir
location
```

> **Yes, This will take some time to read the API, 10mins, 30 mins, 1hr or 1 days or 1 week to read & understand the API structure sometime.**


Not directly jumping  into fetch() which is ne came in recent 6-7 years ago. <br/>
We first learn How we used to do for years. <br/>
Before that also we had APIs, So How do we do that? <br/>
There we used to send XML http request. <br/>
This is a legacy now we use less bcuz developers doesn't know about the older code. <br/>
But It is very interesting and powerful as well. <br/>

- XML http request is in itself an iteresting thing. It is still used in many frameworks.

[https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) <br/>
 
It is basically AJAX programming. People don't do usually. <br/>
It is related to AJAX which is nothing but Asynchronous JavaScript and XML. <br/>
AJAX === Asynchronous JavaScript + XML, that's why it is called as AJAX. <br/>

- readyState

- XMLHttpRequest is in itself a method in which readyState etc are there through which we send our data request and receive the data.

- There are other ways also. But this is mostly used.

```
XMLHttpRequest.readyState
Value State Description 0 UNSENT Client has been created. open() not called yet. 
    1 OPENED open() has been called. 
    2 HEADERS_RECEIVED send() has been called, and headers and status are available.  
    3 LOADING Downloading; responseText holds partial data.  
    4 DONE The operation is complete. 
```
---
**Page-1**
📙📗📕📘📒

- ```console.log()``` or even console, you will not find console in JavaScript standard guidelines. <br/>

- Is console part of JavaScript? <br/>
Technically Yes and Technically No at the same time. <br/>
➜ console and many other APIs are not part of JavaScript especially like ```document.getElementById()``` <br/>
➜ document is also not part of core JavaScript <br/>
➜ In Core JavaScript, Basic Arithmetic operations and few function executions loops etc are there. <br/>

- console and document are accessive APIs. <br/> 
then what about console? <br/>
console is actually a debugging tool for your browser dev tool. <br/>
So console is injected in runtime environment. <br/>

- We have seen how JavaScript run?
- Runtime Env like NodeJS and Browsers.
- NodeJS is one type of implementation of V8 engine.
- Various Engines are available which runs JavaScript one of them is V8.
- V8 Engine repository is available which is all completey written in C++ on GitHub
 
➜ JavaScript actually run by C++. that doesn't mean C++ is best language and JS is nothing. Actually Python also run like this only through C++. <br/>
  This is because C++ is core language and all other language are wrapper on top of C++. <br/>

[V8 Source Code](https://github.com/v8)

- This V8 Engine facilitates with debugging tools and APIs access to work with JavaScript.
- console.log is available here, with actual implementation. <br/>
src > <br/>
d8-console.cc >> implementation of console.log() in c++ <br/>

---
**Page-2**
📙📗📕📘📒
