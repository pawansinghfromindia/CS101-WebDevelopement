function setUsername(username) {
  //complex DB calls
  this.username = username;
  console.log("setUsername called!");
}

function createUser(username, email, password) {
  //this.username = username; // It is outsource by setUsername()
  //setUsername(username);
  // here it looks like It's called though it seems deceiving but call is happening but dummy one which doesn't do the job
  //here we have to explicitly call through special method .call()
  //   setUsername.call(username);
  //here .call() will hold the reference otherwise it's function inside function the context will be vanished
  setUsername.call(this, username);
  this.email = email;
  this.password = password;
}

const user1 = new createUser("User1", "user1@dot.com", 123);
console.log(user1); // It is not setting up username bcuz in actually setUsername() call is not happening but dummy call
