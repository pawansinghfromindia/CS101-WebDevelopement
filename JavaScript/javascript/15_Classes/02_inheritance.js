class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const ram = new Teacher("Mr. Ram", "ram@dot.com", "12345");
ram.addCourse();
ram.logMe();

const shyam = new User("Shyam");
//shyam.addCourse();
shyam.logMe();

console.log(ram === shyam);
console.log(ram instanceof Teacher);
console.log(ram instanceof User);
