/*
There are 2 types of memory
1. stack memory
-> For all primitive datatypes stack memory is used.
-> when stack memory is used you will get a copy of original value
-> One above another is stack

2. Heap memory
-> For reference(non-primitive) datatype heap memory is used.
-> when heap memory is used you will get reference of original value
-> 

*/

let name = "Shiva";
let newName = name;
console.log(newName); //Shiva

let name1 = "Shiva";
let newName1 = name;
newName1 = "Rama";
console.log(newName1); //Rama
console.log(name1); //Shiva
// Here we gave name1 refernce to myName1 So what will be value in name1=?
// As we know primitive datatypes used stack and it gives you a copy of original value not the referenece you get the copy if you changed the value in newName1, then it will not change the value of name1

let user1 = {
  name: "abc",
  email: "abc@india.com",
};
//goes into Heap, get direct reference to original
let user2 = user1;

user2.email = "bcd@india.com";
console.log(user1); //email changed to bcd@india.com
console.log(user2); //email is bcd@india.com
