//ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const user1 = new User("user1", "user1@dot.com", 12345);
console.log(user1);
console.log(user1.encryptPassword());
console.log(user1.changeUsername());

//Behind the scene

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const user2 = new User("user2", "user2@dot.com", 789);
console.log(user2);
console.log(user2.encryptPassword());
console.log(user2.changeUsername());
