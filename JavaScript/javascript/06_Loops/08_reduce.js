// reduce method specially used in shopping card

const myNums = [1, 2, 3, 4, 5];

let mytotal = myNums.reduce(function (acc, curr) {
  console.log(`acc: ${acc} and curr: ${curr}`);
  return acc + curr;
}, 0);
console.log(mytotal);

mytotal = myNums.reduce((acc, curr) => acc + curr, 0);
console.log(mytotal);

console.log("-------------Shopping cart---------------");

const shoppingCart = [
  { itemName: "JS Course", price: 2999 },
  { itemName: "Python Course", price: 999 },
  { itemName: "Mobile Course", price: 5999 },
  { itemName: "DSA Course", price: 1999 },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);
