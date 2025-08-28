/*
Math library comes with JavaScript bydefault
Powerful library - contains all Maths

abs() Absolute value which change any -ve or +ve num to +ve
| -1/+1 | =>  1



*/

console.log(Math); //Math Object

console.log(Math.abs(-3)); //3
console.log(Math.abs(3)); //3

console.log(Math.round(4.3)); // 4
console.log(Math.round(4.6)); // 5

console.log(Math.ceil(4.2)); // 5 ceil means top
console.log(Math.ceil(4.9)); // 5 ceil means top

console.log(Math.floor(4.2)); //4 floor means bottom
console.log(Math.floor(4.9)); //4 floor means bottom

console.log(Math.sqrt(25)); //5 square root

console.log(Math.pow(2, 5)); //32 power

console.log(Math.min(5, 22, 100, 2)); // 2 min value

console.log(Math.max(5, 22, 100, 2)); // 100 max value

console.log(Math.random()); // return pseudo random number between 0 and 1

console.log(Math.random() * 10 + 1); //min 1 to 10
console.log(Math.floor(Math.random() * 10 + 1)); //min 1 to 10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)));

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
