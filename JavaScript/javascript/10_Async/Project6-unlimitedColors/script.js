// generate the random hexcode values for color
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  // color FFFFFF
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
//console.log(randomColor());

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document
  .querySelector("#start")
  .addEventListener("click", startChangingColor, false);

document
  .querySelector("#stop")
  .addEventListener("click", stopChangingColor, false);
