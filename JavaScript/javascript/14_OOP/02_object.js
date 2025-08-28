function multiplyBy5(num) {
  return num * 5;
}

multiplyBy5.power = 2;
console.log(multiplyBy5(5)); //25
console.log(multiplyBy5.power); //2
console.log(multiplyBy5.prototype); //{}

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  // score++; // here context is not clear and also we can't hardcode it.
  this.score++;
};

createUser.prototype.pringtMe = function () {
  console.log(`Price is ${this.score}`);
};

const tea = createUser("Tea", 50);
const chai = createUser("Chai", 75);
//chai.pringtMe();
// till here everything is fine and even properties are also injected but It will give error and say undefined this is because we are missing one very important thing that is new.
// we have not tell that we have additional properties who will does this job to tell that we have new properties is new keyword.
// new, new is reponsible for transferring the value in variable where you called the function.
const tea1 = new createUser("Tea", 50);
const chai1 = new createUser("Chai", 75);
chai1.pringtMe();

/*
Here is what happened behind the scenes when the new keyword is used

A new object is created: The new keyword is initiates the creation of a new javascript object

A prototype is linked : The newly created objcet gets linked to the prototype property  of the constructor function. This means that it has access to properties  and methods defined on the constructor's prototype.

The Constructor is called : The constructor function is called with the specified  arguments  and this  is bound to the newly created object. If no explicit return value is specified from the constructor, Javascript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructir function has been called, if it doesn't return a non-primitive value (object, Array, function, etc), the newly created object is returned.

*/
