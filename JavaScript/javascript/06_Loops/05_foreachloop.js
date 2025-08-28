//for each loop
/*
Most used loop 

when it comes to array some loops are added into array properties itself
bcuz it is obvious if array come then we need loop to iterate

for each is a higher order function

*/
console.log("--------------for each normal function loop---------------");

const myArr = ["js", "ruby", "java", "python", "cpp"];
// lang.forEach( function name() { } )
// callback function doesn't have any name
//lang.forEach( function (item) { console.log(item);} )
myArr.forEach(function (item) {
  console.log(item);
});

console.log("--------------for each loop arrow function---------------");

// greet = () => { console.log("Hello Ji"); }
// myArr.foreach( (element) => { console.log(element) }; )
myArr.forEach((item) => {
  console.log(item);
});

console.log("--------------passing function in for each loop---------------");

function printMe(item) {
  console.log("Hey, Printing array's element :", item);
}

myArr.forEach(printMe); // here we are just giving reference it automatically does the work of calling it.

console.log("--------forEach loop with multiple arguments----------");

//function inside forEach: It doesn't only get item,it has index even whole array
myArr.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

console.log("--------object inside array forEach loop----------");
// object inside array here forEach used mostly
// this is very common operation like data we received from database come in arrays format only and every value is an object
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
