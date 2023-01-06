console.log(`begin`);

function Createpromise(value){
console.log(`enter Createpromise`);

  value = new Promise((resolve, reject) => {
console.log(`enter new promise`);

    return resolve(`${value}`);
  });
console.log(`Exit new promise`);
  
  value.then((param) => {
console.log(`enter then`);

    console.log(param);
  });
console.log(`bottom Createpromise`);

}
console.log(`end Createpromise`);

console.log(`call new Createpromise 1`);
console.log(new Createpromise('wakeup'))
console.log(`end of new Createpromise 1`);

console.log(`call new Createpromise 2`);
console.log(new Createpromise('work'))
console.log(`end of new Createpromise 2`);

console.log(`call new Createpromise 3`);
console.log(new Createpromise('sleep'))
console.log(`end of new Createpromise 3`);
