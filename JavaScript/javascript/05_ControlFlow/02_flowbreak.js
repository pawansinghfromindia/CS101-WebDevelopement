/*
switch()
case 1: break;
case 2: break;
case 3: break;
default:
*/

let week = 7;

switch (week) {
  case 1:
    console.log("Mon");
    break;
  case 2:
    console.log("Tue");
    break;
  case 3:
    console.log("Wed");
    break;
  case 4:
    console.log("Thu");
    break;
  case 5:
    console.log("Fri");
    break;

  default:
    console.log("Weekend Sat || Sun");
    break;
}

//As javascript is like Old school language, so if you don't put break it will execute all the cases from which it matched except default

console.log("\n-----------------Switch without break-------------------\n");

week = 3;

switch (week) {
  case 1:
    console.log("Mon");
  case 2:
    console.log("Tue");
  case 3:
    console.log("Wed");
  case 4:
    console.log("Thu");
  case 5:
    console.log("Fri");
  default:
    console.log("Weekend Sat || Sun");
}

console.log("\n--------------String value in switch case------------------\n");

let month = "Jan";

switch (month) {
  case "Jan":
    console.log("January");
    break;
  case "Feb":
    console.log("February");
    break;
  case "Mar":
    console.log("March");
    break;
  default:
    console.log("April|May|June|July|Aug|Sep|Oct|Nov|Dec");
}
