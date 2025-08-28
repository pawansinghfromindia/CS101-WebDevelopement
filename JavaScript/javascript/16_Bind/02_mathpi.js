//getOwnPropertyDescriptor shows few hidden property of an object.
// eg : you get an object but you can't iterate it, this might be possible that iterator property fot the object is disabled. Yes you can do that.
// eg: why we can't change the universal const Math.PI value?

console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

const mynewObject = Object.create(null);
console.log(mynewObject);

//or
const chai = {
  name: "ginger chai",
  price: 25,
  isAvailable: true,

  orderChai: function () {
    console.log("Code phatt gya!!");
  },
};
console.log(Object.getOwnPropertyDescriptor(chai));
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object.defineProperty(chai, "name", {
//   writable: false,
//   enumerable: false,
// });
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} :${value}`);
  }
}

Object.defineProperty(chai, "name", {
  //writable: false,
  enumerable: true,
});
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} :${value}`);
  }
}
