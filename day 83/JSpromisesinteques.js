const promise = new Promise((resolve, reject) => {
  reject(Error("Some error occurred"));
});
promise.catch((error) => console.log(error.message));
promise.catch((error) => console.log(error.message));

function sleep(ms) {
  return new Promise((res) => {
    setTimeout(res, ms);
  });
}
sleep(2000).then((res) => {
  console.log(7);
});
