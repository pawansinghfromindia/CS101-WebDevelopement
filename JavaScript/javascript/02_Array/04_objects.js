/*



*/

const tinderUser1 = new Object();
console.log(tinderUser1); //{} no difference you will get the empty obj like Object have

const tinderUser2 = {};
console.log(tinderUser2); //{} empty object

// There is no internal difference between tinderUser1 and tinderUser2 though both are created differently only differece is the one which is created by new Object() is singleton object while the one which is created through {} is non-singleton object

console.log("-------------------------------------------");

const tinderUser = {};
tinderUser.id = "1a";
tinderUser.name = "Lord";
tinderUser.isLoggedIn = false;
console.log(tinderUser);

console.log("---------------------------------------------");

const regularUser = {
  email: "abc@email.com",
  fullname: {
    userfullname: {
      firstname: "ABC",
      lastname: "Kumar",
    },
  },
};
console.log(regularUser.fullname.userfullname.firstname); //ABC
console.log(regularUser.fullname?.userfullname.middlename); //
// ? does protection if fullname doesn't exist, many a time when you get response from API then you use ? syntax in case if this value then do this otherwise if you don't have ? you will write every time if and else
// In short It's kind of Ternary operator a>b?a:b

console.log("--------------------------------------------------------");

//Merge object like array

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

const obj3 = { obj1, obj2 }; // problem of objeect inside object
console.log(obj3);

const obj4 = Object.assign(obj1, obj2); // this is fine but you should give an option value {}
console.log(obj4);

const obj5 = Object.assign({}, obj1, obj2); //{} optional which is acting like a source and rest is source which are going to appendd in this empty object {} though it is optional but recommended in syntax guide
console.log(obj5);

const obj6 = Object.assign({ 0: "start" }, obj1, obj2);
console.log(obj6);

// Best way is by using spread opertor
const obj7 = { ...obj1, ...obj2 }; //90% time we use it bcuz it's easy and latest one
console.log(obj7);

// There is another syntax when you data values from database
const users = [
  {
    id: 1,
    email: "abc@gmail.com",
  },
  {
    id: 2,
    email: "bcd@gmail.com",
  },
  {
    id: 3,
    email: "cde@gmail.com",
  },
];
console.log(users[1].email); //bcd@gmail.com

console.log(tinderUser);

//Very important and interesting for any project when you use database here you get an array of keys of an object on which you can loop through
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

//if key/values doesn't exist in that case either you see it manually or you can simply ask object
console.log(tinderUser.hasOwnProperty("id")); //true
console.log(tinderUser.hasOwnProperty("salary")); //false

// To know more about Object methods go to browser window
