//map method
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = myNumbers.map((num) => num + 10);
console.log(result);

const table = myNumbers.map((num) => {
  return num * 5;
});
console.log(table);

console.log("-----------chaining-------------------");

const newNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNum = newNumber
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);
console.log(newNum);
