/*
Function simply means the code you written 5 lines, 10 lines, 100lines 
pack them in a package
Now you can use that package as many time and wherever you want.
Write once use as many time as you wish

*/

// console.log("A");
// console.log("B");
// console.log("C");
// console.log("D");
// console.log("E");

console.log("-------------------------------------------");

function englishAlphabets() {
  console.log("A");
  console.log("B");
  console.log("C");
  console.log("D");
  console.log("E");
}

// function declaration | function name | function definition

const funReference = englishAlphabets; // function reference, It's not executed automatically until you call
//console.log(funReference); //[Function: englishAlphabets]

//englishAlphabets(); // function call

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
console.log("---------------------------------------------");

// In JavaScript functions are very interesting
const result = addTwoNum(2, 4); //6 you can store function in a variable
console.log("result: ", result); //6 but result hold undefined
console.log(typeof result); // undefined

console.log("...........................................................");

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
//scope of variable

console.log("----------------------------------------------------");

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

/*
In JavaScript few things are considered as false
like:-
false is false obviously
""/''/`` empty string is considered as false value
null is considered as false value
undefined is considered as false value
*/

console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

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

console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb");

//Suppose this type of situation you want to avoid then you can give default value
//Now if you don't put anything the default value is John not undefined
function loginUserMessage4(username = "John") {
  return `${username} logged in Successfully!`;
}
console.log(loginUserMessage4());
console.log(loginUserMessage4("Sam"));
