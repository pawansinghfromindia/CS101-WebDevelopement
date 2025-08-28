/*
Array 
myArr = [0,1,2]
myArr1 = [0,1,true,false,"Abc", 1.01,[a,b,c]]

JavaScript arrays are resizable and heterogenous also.

Array indexing start from 0
Arr[0]
Arr[1]
Arr["one"] not allowed!

JavaScript array-copy operation create shallow copies

Deep Copy?
Properties do not share the same reference means pass by value, changes in copy doesn't make any changes in original because it is a separate copy from original one.

Shallow copy ?
Shallow copy of an object is a copy whose properties share same references as those of source object from which the copy was made.
Basically means same reference point, what changes we will made in copy same will happen in original as well.



*/

//Array basics
/*
const myArr = [0, 1, 2, 3, 4];
const cities = ["Mumbai", "Delhi", "Chandigarh"];
console.log(myArr[0]);
console.log(cities);

const myArr1 = new Array(1, 2, 3, 4, 5);
console.log(myArr1);
console.log(myArr1.length);
*/

// Array methods
/*
const arr = [1,2,3,4,5];
arr.push(6); //push element into arr
console.log(arr); //[1,2,3,4,5,6]
arr.push(7);
console.log(arr); //[1,2,3,4,5,6,7]
arr.pop(); //simply remove and return last element
*/

/*
const arr = [1, 2, 3, 4, 5];
arr.unshift(9); //insert element in start but problem with this we have to shift all the element in arr here only 5 element but what if 1000 elements It's time consuming
console.log(arr);
arr.shift(); //remove the first element of arr
console.log(arr);
*/

/*
const arr = [1, 2, 3, 4, 5];
console.log(arr.includes(9)); //false
console.log(arr.indexOf(9)); //-1
console.log(arr.indexOf(5)); //4

const newArr = arr.join(); //bind element with comma separated & converts arr into a string

console.log(arr);
console.log(typeof newArr);
*/

//slice and splice and difference is asked in interview
const myArr = [1, 2, 3, 4, 5];
console.log("A", myArr);

const myArr1 = myArr.slice(1, 3); //last range doesn't include
console.log(myArr1);
console.log("B", myArr);

const myArr2 = myArr.splice(1, 3); //last range include + remove the element from original arr
console.log(myArr2);
console.log("C", myArr);
