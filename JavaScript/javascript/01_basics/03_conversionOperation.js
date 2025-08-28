/*
let score = 99;
console.log(typeof score); //number
//console.log(typeof (score));

score = "99";
console.log(typeof score); //string

let valueInNumber = Number(score);
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //99

valueInNumber = Number("ab12");
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //NaN - Not a Number

let id = null;
let newId = Number(id);
console.log(typeof newId); //number
console.log(newId); //0

let rollNum = undefined;
let newRollNum = Number(rollNum);
console.log(typeof newRollNum); //number
console.log(newRollNum); //NaN

let isLoggedIn = true;
let loggedIn = Number(isLoggedIn);
console.log(typeof loggedIn); //number
console.log(loggedIn); //1

let x = NaN;
let y = Number(x);
console.log(typeof y); //number
console.log(y); //NaN

console.log("number " + Number(NaN));

console.log("boolean " + Boolean(null));

console.log("string " + String(undefined));

*/

console.log("--------Basic Operations-------------");

let val = 11;
let negVal = -val;
console.log(negVal); //-11

console.log(7 + 2); //9
console.log(9 - 1); //8
console.log(8 * 3); //24
console.log(24 / 7); //6
console.log(24 % 9); //8
console.log(2 ** 3); //8

console.log("---------string and number------------");

let str1 = "hello";
let str2 = " world";
let str3 = str1 + str2;
console.log(str3); //hello world

console.log("1" + 2); // 12 string
console.log("1" + 2 + 2); // No it's not 14 string | 122 string
console.log(2 + 2 + "1"); // 41 string

console.log(1 + "2"); // 12 string
console.log("1" + "2"); // 12 string
console.log(1 + 2); // 3 number

console.log(3 + (((4 * 10) / 5) % 2)); //3 This is good for exam que not in real life
console.log(3 + (((4 * 10) / 5) % 2)); //3

console.log(7 - 2 + ((12 / 2 / (1 + 2)) % (3 * 1))); // 7 in Real life define your priority what you want to do first

console.log("--------Tricky Conversions | operator precidence-------------");
console.log(true); //true
console.log(+true); //1
//console.log(true+); //Error
console.log(+""); //0

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.log(num1); //4

let counter = 100;
counter++; //postfix operator
console.log(counter); //101
++counter; //prefix operator
console.log(counter); //102

let count = 0;
console.log(count++); //0 after printing this line count become 1
console.log(++count); //2 before printing here count became 2
