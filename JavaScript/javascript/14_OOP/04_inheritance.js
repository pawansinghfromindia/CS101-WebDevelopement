const User = {
  name: "user",
  email: "user@dot.com",
};

const Teacher = {
  makeVide: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS Assignment",
  fulltime: true,

  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;
//This is what we call as Prototypal inheritance that how can we access the other propwerties.
//This approach is little outdated.

//Modern Syntax is
Object.setPrototypeOf(TeachingSupport, Teacher);

// Now lets implement the truelength method
let anotherUsername = "Nomadic    ";

String.prototype.trueLength = function () {
  console.log(this);
  console.log(`The true length is ${this.trim().length}`);
};

anotherUsername.trueLength();
"Hello".trueLength();
"Abc   ".trueLength();
