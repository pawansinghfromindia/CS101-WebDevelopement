/*
 loop has 3 parts - initialization | condition | Update

 initialiaze a variable from which your loop starts executing
check condition whether it's true or false to run the loop
update the condition like increment or decrement to end the loop otherwise it'll run infinite times

while() loop

initionliazation;
while (condition) {
    update;
}
*/
console.log("--------------while loop-------------");

let i = 2;
while (i <= 20) {
  console.log(`i = ${i}`);
  i = i + 2;
}

console.log("--------------Array through while loop-------------");

let myArray = ["Krishna", "Arjuna", "Bhima", "Karna", "Drona"];
let index = 0;
while (index < myArray.length) {
  const element = myArray[index];
  console.log(`myArray[${index}] = ${element}`);
  index++;
}

console.log("-------------- do while loop-------------");

//do while loop
/*
 The name itself says first fo then while(condition) will check
 So at least one time loop will run for sure
 after that condition will check at the end then based on true/false It is decide whether loop will run again or not

 It is rarely used! 

 */

let score = 0;
do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10);

console.log("-------------- do while loop-------------");
score = 100;
do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10);
