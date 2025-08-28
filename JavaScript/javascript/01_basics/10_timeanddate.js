/*
Arbitrary date Jan 1,1970
From there dates are calculated in JavaScript
Dates usually calculate in mili-seconds, this is why when we declare date variable it comes with a long string that's nothing but time in ms from the date Jan 1, 1970 to right now
Obviously It's easy to store them and compare them in mili-seconds
But It is not that easy!
So, JavaScript suggest through tc39 w3 organization Consortium of JavaScript.
They suggest Temporal API but it's not feasible yet, They're working on bring it on every browser like Math library

So, Today we have learn Date as in existing form only

*/

let myDate = new Date();
//Date is a Object in JavaScript
console.log(typeof myDate); //object

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());

//If you want to declare a new specific dare
let newDate = new Date(2025, 0, 25); // month starts with 0 in JavaScript
console.log(newDate.toDateString());

let newDateTime = new Date(2025, 0, 25, 5, 3);
console.log(newDateTime.toLocaleString());

let newDate1 = new Date("2025-01-31"); //Here month starts at 01 not 00
console.log(newDate1.toDateString());

let newDate2 = new Date("01-01-2025"); //Here month starts at 01 not 00
console.log(newDate2.toDateString());

// TimeStamp is very useful especially to find exact timestamp value while designing quizes/poles who submitted faster should be the winner in these case we use timestamp

let myTimeStamp = Date.now();
console.log(myTimeStamp); // mili-second value from Jan 1, 1970 Now It is bit difficult to extract the value from this mili-second
// suppose you're building Hotel Booking App, Pole there we need to compare dates in that case

let myCreatedDate = new Date("01-15-2025");
console.log(myCreatedDate.getTime()); //
console.log(myTimeStamp);
//Now we can compre these two very easily

//convert this into seconds
console.log(Date.now()); //current date in ms
console.log(Math.floor(Date.now() / 1000)); // current date in second

let newDate3 = new Date();
console.log(newDate3);
console.log(newDate3.getDate());
console.log(newDate3.getMonth() + 1); //months starts with 0 not 1 here
console.log(newDate3.getDay()); //Mon 1
console.log(newDate3.getSeconds());

newDate3.toLocaleString("default", {
  weekday: "long",
});
