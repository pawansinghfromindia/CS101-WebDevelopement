#  🚀 You don't know Array in JavaScript

## 📍 Array Beyond the basics
- Array is an object
- Collection of multiple items
- Resizable
- Zero index
- Shallow Copy 
- Deep Copy
- Constructor

All of these are prerequisites.


```javascript
const myArr = [] 

%DebugPrint(myArr);
```

## 📍 V8-Debugger

- Array in JS are of 2 types : <br/>
1. Continuous(Packed) Array <br/>
2. Holey Array - in which holes are there. <br/>

- Optimization of Arrays happen internally in every language C++/JavaScript/Rust almost every language compiler or interpreter does this.

- The Array optimization in JavaScript is in 3 ways <br/>
i) SMI - Small Integer, It is a type of array <br/>
ii) Packed element  <br/>
iii) Double (float, string, function etc comes in double) <br/>

- Now continuous can of these three types and Holey can be also of these 3 types.

- Based on these different permutation combination Array optimization happends internally in JS (V8 Engines)

## 📍 Key points:

- Technological terminology : <br/>
Elements  <br/>
Not Array properties, Array Elements  <br/>

```javascript
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
```

- There is no sense to add NaN or Infinity and once it got pushed I will downgraded and never be same optimized. <br/>
  So always check before adding the elements to an array

- Modern Recommendation for for,for-of,for-each use these methods is recommended when you try to make your own for loop might be optimised for 2-3 cases <br/>
  but browser obpized by default for everything and updates it continuously.

---
**Page-1**
📙📗📕📘📒

[Prev]()
