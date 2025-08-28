const user = {
  username: "Mohan",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log("Got user details from database.");
    //console.log(`username is : ${username}`); //username not defined
    console.log(`username is : ${this.username}`);
    console.log(this); // current context memory value
  },
};
console.log(user.username);
console.log(user.getUserDetails());
console.log(this); //{} bcuz there is nothing in global current context.
// when you run it in browser there current context contains a lot of things like window object.

// Now if I want to create user2 in that case we have to write the whole code again which is not a good way. So we have constructor function
console.log("---------------constructor------------------");

// const promiseOne = new Promise();
// const dateOne = new Date();
//what is this new keyword? where does it come from?
// this new is actually a constructor function, what it does is allows us to create multiple instances
// this new is known as Constructor function

function userDetails(username, loginCount, isLoggedIn) {
  //username = username
  //myUsername = username
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

const userOne = userDetails("Rohan", 12, true);
const userTwo = userDetails("Mohan", 10, false); //It overwrite the value of userOne
console.log(userOne);
// This is why we use new keyword which is a constructor function

const user1 = new userDetails("Rohan", 12, true);
const user2 = new userDetails("Mohan", 10, false);
console.log(user1);
console.log(user1.constructor);
