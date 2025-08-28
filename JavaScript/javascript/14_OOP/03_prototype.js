/*
let myName = "Ram";
console.log(myName.length);

let myName1 = "Ram   ";
//console.log(myName1.length);
//console.log(myName1.trim().length);
console.log(myName1.trueLength);

*/

let myHeros = ["Thor", "Spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`spidy power is ${this.spiderman}`);
  },
};

//heroPower.krishna();
// suppose we want something like the krishna() function can we do that?

Object.prototype.krishna = function () {
  console.log(`Krishna is present in all object`);
};

heroPower.krishna();
myHeros.krishna();

Array.prototype.heyKrishna = function () {
  console.log(`Krishna says hello`);
};

myHeros.heyKrishna();
// heroPower.heyKrishna();
