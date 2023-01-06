let wakeup = new Promise((resolve, reject) => {
  return resolve("wakeup");
});

console.log(
  wakeup.then((param) => {
    return param;
  })
);

let work = new Promise((resolve, reject) => {
  return resolve("work");
});

console.log(
  work.then((param) => {
    return param;
  })
);

let sleep = new Promise((resolve, reject) => {
  return resolve("sleep");
});
sleep.then((param) => {
  console.log(param);
});


function Createpromise(value) {
  value = new Promise((resolve, reject) => {
    return resolve(`${value}`);
  });
  value.then((param) => {
    console.log(param);
  });
}

console.log(new Createpromise("wakeup"));
console.log(new Createpromise("work"));
console.log(new Createpromise("sleep"));



