// old ways of getter setter
// Inside function based properties how to set and get

function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this.email = value;
    },
  });

  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (value) {
      this.email = value;
    },
  });
}

const chai = new User("chai@ai", "chai");
console.log(chai.email);
console.log(chai.password);
