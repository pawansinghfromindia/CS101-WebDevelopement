const myArr = [];
// %DebugPrint(myArr);

const arrTwo = [1, 2, 3, 4, 5];
//PACKED_SMI_ELEMENTS

arrTwo.push(6.0);
//PACKED_DOUBLE_ELEMENTS

arrTwo.push("7");
//PACKED_ELEMENTS

arrTwo[10] = 11;
//ArrTwo becomes HOLEY_ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]); //undefined It's very costly bcuz bound check pass already

//bound check
Array.hasOwnProperty(arrTwo, 9); //hasOwnProperty is very expensive
Array.hasOwnProperty(arrTwo.prototype, 9);
Array.hasOwnProperty(Object.prototype, 9);

console.log(arrTwo[19]); //undefined  bound check not costly

//holes are very expensive in js

const arrThree = [1, 2, 3, 4, 5];
console.log(arrThree[0]);
console.log(arrThree[1]);
console.log(arrThree[2]);
console.log(arrThree[3]);
console.log(arrThree[4]);
console.log(arrThree[5]); // undefined out of bound

//           SMI > DOUBLE > PACKED
//most optmized                   least optmized

// HOLES_SMI > HOLES_DOUBLE > HOLES_PACKED

// Around more than 30 variations and everything checked then optimised.

// Once downgrade happened after that no going back bcuz of this happens at memory level

const arrFour = new Array(3);
// just 3 holes, HOLEY_SMI_ELEMENTS
arrFour[0] = "1"; //downgraded to HOLEY_ELEMENTS
arrFour[0] = "2"; //downgraded to HOLEY_ELEMENTS
arrFour[0] = "3"; //downgraded to HOLEY_ELEMENTS

// We can do this in better way

const arrFive = []; //SMI
arrFive.push("1"); //Packed ELEMENTS
arrFive.push("2"); //Packed ELEMENTS
arrFive.push("3"); //Packed ELEMENTS

const arrSix = [1, 2, 3, 4, 5]; //SMI
arrSix.push(NaN); //PACKED_DOUBLE
arrSix.push(Infinity); //PACKED_DOUBLE
//There is no sense to add NaN or Infinity and once it got pushed I will downgraded and never be same optimized. So always check before adding the elements to an array

// Modern Recommendation for for,for-of,for-each use these methods is recommended when you try to make your own for loop might be optimised for 2-3 cases but browser obpized by default for everything and updates it continuously
