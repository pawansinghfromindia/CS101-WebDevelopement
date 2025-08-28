class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  createID() {
    return `123`;
  }

  static createUniqueID() {
    return `123`;
  }
}

const aman = new User("Aman");
console.log(aman.createID());
//console.log(aman.createUniqueID());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const Sachin = new Teacher("Sachin", "sachin@google.com");
console.log(Sachin);
Sachin.logMe();
console.log(Sachin.createID());
// Sachin.createUniqueID();
