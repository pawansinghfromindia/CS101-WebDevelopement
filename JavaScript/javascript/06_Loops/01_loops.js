/*
Loop is a also known as Iterator

loop has 3 parts - initialization | condition | Update

for loop

for(initialization : condition check : update value)
initialiaze a variable from which your loop starts executing
check condition whether it's true or false to run the loop
update the condition like increment or decrement to end the loop otherwise it'll run infinite times

*/

//for loop

for (let i = 1; i <= 10; i++) {
  const element = i;
  console.log(element);
  // after this line i++
  //then condition check i < 10
  // if true then code execute otherwise out of loop
}

console.log("---------------if inside loop-----------------------");

// for loop body { } has its scope you can't access i or element outside for loop

for (let i = 1; i <= 10; i++) {
  const element = i;
  if (i === 5) {
    console.log("We reached till 5");
  }
  console.log(element);
}

console.log("---------------loop inside loop-----------------------");
for (let i = 1; i <= 10; i++) {
  console.log(`\nOuter loop i = ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`Inner loop i = ${i} j = ${j}`);
  }
}

console.log("-------------------Multiplication | Tables --------------------");
for (let i = 1; i <= 10; i++) {
  console.log(`Table of ${i} `);

  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

console.log("-----------------Loop on Array-----------------");

let myArray = ["Banguluru", "Mumbai", "New Delhi", "Chandigarh", "Indore"];
// myArray  = [    0,          1,          2,            3,          4    ]
console.log(`myArray length = ${myArray.length}`);
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}

console.log("----------------Break in loop----------------------");
//It is not necessary to run loop from start to end as we get something we want to exit the loop
for (let i = 1; i <= 20; i++) {
  if (i === 5) {
    console.log(`${i} detected!`);
    break; //out of loop
  }
  console.log(`value of i is ${i}`);
}

console.log("----------------continue in loop----------------------");
for (let i = 1; i <= 20; i++) {
  if (i === 5) {
    console.log(`${i} skipped, continue`);
    continue; // Ignore just one time
  }
  console.log(`value of i is ${i}`);
}
