// class User {
//   constructor(email, password) {
//     this.email = email;
//     this.password = password;
//   }
//   get password() {
//     return this.password.toUpperCase();
//   }
//   set password(value) {
//     this.password = value;
//   }
// }

// const ram = new User("ram@dot.com", "ram123");
// console.log(ram.password);

// Maximum call stack size exceeded,bcuz setter running infinitely from constructor as well as setter both, As solution to this problem

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get password() {
    // return this._password.toUpperCase();
    return `${this._password}xyz`;
  }
  set password(value) {
    this._password = value;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(email) {
    this._email = email;
  }
}

const ram = new User("ram@dot.com", "ram123");
console.log(ram.password);
console.log(ram.email);
