let asyncFunction1 = (message) => new Promise ((resolve) => {
  setTimeout(() => {
    console.log('func1',  message);
    resolve('func1');
  }, 1000);
});

let asyncFunction2 = (message) => new Promise ((resolve) => {
  setTimeout(() => {
    console.log('func2',  message);
    resolve('func2');
  }, 1000);
});


function notAsyncMain() {
  asyncFunction1('hello').then((data) => {
    console.log(data);
    return asyncFunction2('world');
  }).then((data) => {
    console.log(data);
  });
}
