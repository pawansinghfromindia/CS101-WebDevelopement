//Creating a promise
const promiseOne = new Promise(function (resolve, reject) {
  // Do an Async tasks like
  // DB calls, Cryptography, Network Calls
  setTimeout(function () {
    console.log("Asysn task is completed.");
    resolve();
  }, 1000);
});

//promise consumption
//.then is directly connection with resolve
// in .then() there is a call back given which means a function,  this function automatically receive an argument which job is to returns the values
promiseOne.then(function () {
  console.log("Promise consumed!");
});

console.log("------------PromiseTwo-------------------");

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved!");
});

console.log("------------PromiseThree-------------------");
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "John", email: "john@google.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});
console.log("------------PromiseFour-------------------");
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Amit", password: "12345" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected!"));

console.log("------------PromiseFive-------------------");

const PromiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "JavaScript", password: "12345" });
    } else {
      reject("Error : JavaScript went wrong!");
    }
  }, 1000);
});
async function consumePromiseFive() {
  try {
    const response = await PromiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     // console.log(response);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }
// getAllUsers();

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log("Error!!"));
