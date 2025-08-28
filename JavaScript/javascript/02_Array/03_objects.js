//singleton

//object literals

//Object.create

/*
const myArray = ["User1",18,"user1@email.com"];
myArr[0]
myArr[1]
myArr[2]
 these changed in Object

 const user = {
 name: "user1", 
 age: 18,
 email: "user1@email.com"
 }
 Here by default system process name/age/email as "name"/"age"/"email" not name/age/email, name/age/email are in itself a string but we do not write like this because system already consider that as string then why to write it
 You can provide put value whatever you want string,boolean,array,function,another object

 const user = {
 0: "user1",
 1: 18,
 2: "user1@email.com"
 }

*/

const user = {
  name: "user1",
  age: 18,
  email: "user1@gmail.com",
  isLoggedIn: false,
  lastLoggedInDays: ["Mon", "Tue", "Sat"],
};
//How to access an object?
//Generally people think that user.name/user.age like we can access the object which is but there are good ways apart from this. this is not a bad ways but there are other good ways
console.log(user.name); //user1
console.log(user["name"]); //user1

//Both are same then what is the limitation of accessing through dot(.)

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

console.log("----------------------");

// In JavaScript Function is not less than everything which means there is no descrimination with function you can treat it as variable there will be no difference
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
