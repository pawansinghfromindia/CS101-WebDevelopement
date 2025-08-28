const marvel_heroes = ["thor", "Ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

//push()
//marvel_heroes.push(dc_heroes); //dc_heroes arr will be appended as last of marval_heroes not merged!
// console.log(marvel_heroes);
// console.log(marvel_heroes[3]); //an arr

//concat()
// const all_heroes = marvel_heroes.concat(dc_heroes); // unlike push, concat return a new arr
// console.log(marvel_heroes);
// console.log(all_heroes);

//spread operator
// const all_heroes1 = [...marvel_heroes, ...dc_heroes]; //... is spread now it is not array all elements became individual so now we get spread values in new array
// console.log(all_heroes1);

// flat
// const arr = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]], 12];
// const arr1 = arr.flat(1); //pass the depth
// const arr2 = arr.flat(Infinity); //depth is infinity
// console.log(arr);
// console.log(arr1);
// console.log(arr2);

//Array.isArray() || Array.from() || Array.of()
/*
console.log(Array.isArray("Shiva")); //false because we passed string
console.log(Array.from("Shiva")); // make array from string we pass
console.log(Array.from({ name: "Shiva" })); // [] It directly not convert it you have to tell you want keys array of values array or what
const myObj = { name: "Shiva" };
const entries = Object.entries(myObj);
console.log(Array.from(entries));
*/

let subject1 = "Hindi";
let subject2 = "English";
let subject3 = "Maths";
console.log(Array.of(subject1, subject2, subject3));
