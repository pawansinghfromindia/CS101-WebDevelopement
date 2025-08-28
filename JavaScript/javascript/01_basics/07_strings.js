/*
Modern Syntax of Strings

"hello" + " world"
'hello'
`hello`

*/
console.log("hello" + "world"); //helloworld
console.log("hello" + " javascript"); //hello javscript

const user = "Mr. Krishna";
console.log("hello" + " " + user); // hello Mr. X

const userId = 100;
console.log("your userid is " + String(userId)); //your userid is 100

// String Interpolation - Modern Ways of printing string is through using back tick beloc esc key
console.log(`hello ${user}`); //hello Mr. X
console.log(`your userid is ${userId}`); //your userid is 100

console.log(`Hello my name is ${user.toUpperCase()} and my id is ${userId}`);

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
