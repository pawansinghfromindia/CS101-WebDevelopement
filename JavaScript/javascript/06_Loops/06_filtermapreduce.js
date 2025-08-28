/*
filter, map and reduce
*/

const coding = ["c", "c++", "java", "python", "javascript"];

// what does forEach return if we store it in variable
const values = coding.forEach((item) => {
  console.log(item);
});
console.log(values); //undefined
// if you want to return something through function in forEach then even if you use return under function it will return nothing you will get undefined

const values1 = coding.forEach((item) => {
  //console.log(item);
  return item;
});
console.log(values1);

// if we want to return each value instead of just printing
// then what is the solution for this problem?

console.log("-------------------filter map reduce---------------------");

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//like forEach we have filter operation

//basic
let newNums = myNums.filter((num) => num > 4);
console.log(newNums);

let newNums1 = myNums.filter((num) => {
  return num < 6;
});
console.log(newNums1);

console.log("-------------------------------------");

// now you want to do same job but in forEach loop only?

const nums = [];
myNums.forEach((num) => {
  if (num > 4) {
    nums.push(num);
  }
});
console.log(nums);

console.log("----------Books exercise through filters----------------");

//objects array - same types of values you get from database
const books = [
  { title: "Book 1", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book 2", genre: "Non-Fiction", publish: 1991, edition: 2005 },
  { title: "Book 3", genre: "History", publish: 1999, edition: 2006 },
  { title: "Book 4", genre: "Science", publish: 1985, edition: 2007 },
  { title: "Book 5", genre: "Fiction", publish: 1998, edition: 2008 },
  { title: "Book 6", genre: "History", publish: 2001, edition: 2009 },
  { title: "Book 7", genre: "Non-Fiction", publish: 2005, edition: 2001 },
  { title: "Book 8", genre: "Fiction", publish: 2010, edition: 2010 },
  { title: "Book 9", genre: "Fiction", publish: 2014, edition: 2020 },
  { title: "Book 10", genre: "History", publish: 2019, edition: 2025 },
];

let userBooks = books.filter((bk) => bk.genre === "History");
console.log(userBooks);
userBooks = books.filter((bk) => {
  return bk.publish > 2000 && bk.genre === "History";
});
console.log(userBooks);
