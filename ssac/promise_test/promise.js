const { resolve } = require("path/posix");

const promise1 = function(condition) {
  return new Promise((resolve, reject) => {
    if(condition) {
      resolve("true");
    } else {
      reject("false");
    }
  });
}


// promise1(false).then(
//   (message) => {
//     console.log(message)
//   }, 
//   (error) => {
//     console.log(error);
// });

promise1(false)
  .then((message) => {
    console.log(message);
  }) 
  .catch((error) => {
    console.log(error);
  });


const promiseChain1 = (param) => {
  return new Promise((resolve, reject) => {
    console.log("func1");
    setTimeout(() => {
      resolve(`func 1 success: ${param}`);
    }, 500);
  });
};

const promiseChain2 = (param) => {
  return new Promise((resolve, reject) => {
    console.log("func2");
    setTimeout(() => {
      reject(`func 2 failed: ${param}`);
    }, 500);
  });
};

const promiseChain3 = (param) => {
  return new Promise((resolve, reject) => {
    console.log("func3");
    setTimeout(() => {
      reject(`func 2 success: ${param}`);
    }, 500);
  });
};

promiseChain1("start")
  .then(promiseChain2)
  .then(promiseChain3)
  .catch((error) => console.log(error));