"use strict"; //treat all JS code as newer version

// alert(2 + 5); //We're using nodejs, not browser

/*
Always ensure code readability high
console.log(2+3); console.log("hello");
console.log(2 +
3);
*/
console.log(2 + 3);
console.log("hello");
console.log(2 + 3);
/*
Note : In fact we use an extension Prettier - Code formatter to do this here automatically
*/

/*
MDN Docs
ECMA https://ts39.es
*/

let name = "Ram";
let age = 19;
let isLoggedIn = false;
let state;

console.log(typeof "Rohit"); //string
console.log(typeof age); //number
console.log(typeof null); //object [Interview Que] Lang Error?
console.log(typeof undefined); //undefined

/*
Data Types

Premitive Datatypes
1.number  => 2^55
2.bigint  => Rarely used | Trading, Stock etc
3.string  => "" | '' | ``
4.boolean => true/false
5.null
6.undefined
7.symbol  => It's unique. Mostly you will see in React when you make a lot of components and you have to identify unique component. So to find uniqueness symbol used

null    => null is a stand alone value, Yes It's also a datatype
           null is a representation of empty value
           empty doesn't means let name="" or let sum=0
undefined => when you just declare variable but do not define value
let state;  //It's undefined
let state = null; //now it is defined but empty

null can be understood through temperature example
empty means you send a request to a server for temperature, now if something went wrong at server so It send you a response temp=0 then 0 is a temp so we don't need 0 server should prefer null which means no temperature.

Non-Primitive Datatype
1. Object

*/
