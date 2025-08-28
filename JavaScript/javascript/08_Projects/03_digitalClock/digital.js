const clock = document.getElementById("clock");
//or
const clock1 = document.querySelector("#clock");

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
