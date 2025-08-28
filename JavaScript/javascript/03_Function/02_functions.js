/*
In Project, usually in eCommerce you see shopping cart
In shopping cart user add, add, add again add you don't know how many items users can add in shopping cart and you just have to add price of all items
This situation is very common unlike you know you have 2 arguments ot 3 arguments
*/

function addItemInCart(item1) {
  return item1;
}
console.log(addItemInCart(1)); //1
console.log(addItemInCart(100, 200, 500)); //100 but what about 200 and 500
// how to solve this problem
//for this we have rest operator
// ... is known as spread operator and this one also known as rest operator based on use case we call it spread operator or rest operator
//rest simply means whatever the items you get they are in retail you have to pack them in a bundle and then give it to rest operator
function addItemInCart1(...item1) {
  return item1;
}
console.log(addItemInCart1(100, 200, 500)); //[100,200,500]

function addItemInCart2(val1, val2, ...item1) {
  return item1;
}
console.log(addItemInCart2(100, 200, 500, 600, 700)); // [500, 600, 700];

console.log("---------------------------------------------");

//objects
const user = {
  username: "Krishna",
  price: 199,
};
//How to pass this object to a function

function handleObject(user) {
  console.log(`username is ${user.username} and price is ${user.price}`);
}
handleObject(user);

handleObject({
  username: "Ram",
  price: 299,
});

console.log("--------------------------------");

// arrays
const arr = [100, 200, 300, 400];
function handleArray(newarr) {
  return newarr[1];
}
console.log(handleArray(arr)); //200
console.log(handleArray([56, 67, 23, 1, 45])); //67
