const score = 100; //automatically defined
console.log(score); //number

const balance = new Number(100); // specifically casted in a Number
console.log(balance); //Number object

console.log(balance.toString().length); //3
console.log(balance.toFixed(2)); //100.00 //precision value

//use toPrecision() very carefully
const num = 23.8966;
console.log(num.toPrecision(3)); //23.9

const num1 = 123.8966;
console.log(num1.toPrecision(3)); //124

const num2 = 123.8966;
console.log(num2.toPrecision(4)); //123.9

const num3 = 1123.8966;
console.log(num3.toPrecision(3)); //1.12e+3

const hundreds = 100000000; //bit challenging to count 0's
console.log(hundreds.toLocaleString()); // to better readability of 0s USA standards thousand 100 thousand
console.log(hundreds.toLocaleString("en-IN")); // indian standard

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.EPSILON);
