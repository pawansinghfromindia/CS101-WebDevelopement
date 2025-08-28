console.log("-------------comparison-------------");

console.log(2 > 1); //true
console.log(2 < 1); //false

console.log(2 == 2); //true

console.log(2 != 1); //true

console.log("Hello" == "Hello"); //true

console.log("-------Comparing two different datatypes-------");

console.log("2" > 1); //true Here JS automatically convert "2" to a number
console.log("02" > 1); //true

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true why? Here value convert
/*
Note : The reason is that an equality check == and comparisions >,<,>=,<= work differently
       comparisions >,<,>=,<= convert null to a number, treating it as 0
       That's why null >= 0 is 0 >= 0 which is true
       while null > 0 is false
*/

console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false

console.log("------ == vs === --------");
/*
Difference between == and ===
=== is a strict check which not only check values but also check value strictly which means check datatype also
*/

console.log("2" == 2); //true
console.log("2" === 2); //false
