function one() {
  const username = "Shiva";
  function two() {
    const website = "google";
    console.log(`Hi, username: ${username} and website: ${website}`);
  }
  //console.log(`username: ${username} website:${website}`); // you can't access website outside two(){}
  two();
}

//two(); // two() undefined bcuz you can't access two() outside one()
//one(); // website is not defined bcuz you can't access website outside two()
// now comment website and run one();

one();

/*
There is a story behind every function call.
Whatever time you declare function inside function and call them for them a different call stack will be created means there scope will also created in call stack
There you can see how it store in memory and vanished after the scope is over

This is what known as closure that your inner function can access the outer variable but it is more than that.

Simple layman term : when nested functions are there then child functions can access parent vaiables

*/
console.log("----------------------------------------------");

//if block scope

if (true) {
  const empname = "Rahul";
  if (empname === "Rahul") {
    const salary = 100;
    console.log(empname + " and " + salary); // Rahul and 100
  }
  //console.log(website); // not accessible outside the scope of inner child if(){}
}
//console.log(empname); // not accessible outside the parent if(){}

console.log("--------------------------------------------------");

//
function addOne(num) {
  return num + 1;
}

const result = addOne(5);
console.log(result); //5

// another way to do this
const addTwo = function (num) {
  return num + 2;
};
console.log(addTwo(5)); // 7

// another way to this using arrow function

const addThree = (num) => {
  return num + 3;
};
console.log(addThree(5)); //8

// arrow function of 1 line then no need to return
const addFour = (num) => num + 4;
console.log(addFour(5)); //9

/*
 concept of hoistic - which means how we declare function it decides the scope and accessibility of function
 
 const addTwo = function (num) {
  return num + 2;
 };
 here function declaration and holding it in a variable together is hoistic
 
 function addOne(num) {
  return num + 1;
 }
 
 here two ways of declaring function both are doing the same job but they are different in terms of accessing before function declarion
 addOne(5); can run before addOne() declaration
 
 while you can't access addTwo(5) before addTwo() declaration bcuz of Hoistic concept
 where Javascript make a tree of all functions all variable and then create a context based on that things decide.

 */
