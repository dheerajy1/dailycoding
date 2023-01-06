Today #Day81 of #100DaysOfCode, I Learned and Explained about JS promises.

# Learning/playing about JS Promises

creating a simple promise

```javascript
let wakeup = new Promise((resolve, reject) => {
    return resolve("wakeup");
  });
  console.log(
    wakeup.then((resolve) => {
      return resolve;
    })
  );
```

Now,

The below code will create two new promises and will print the promise done after 2 seconds

```javascript
let store
let wakeup = new Promise((resolve, reject) => {
    return resolve("wakeup");
});

store = wakeup.then((resolve) => {

    console.log(resolve)
    return `promise done`;
}
);

let sleep = new Promise((resolve, reject) => {
    return resolve("sleep");
});
sleep.then((param) => {
    console.log(param);;
})
setTimeout(() => {
    store.then((ret) => { console.log(ret) })
}, 2000)
```

Now, let's see How JavaScript executes the below code,

```javascript
console.log(1);

function Createpromise(value){
console.log(2);

  value = new Promise((resolve, reject) => {
console.log(3);

    return resolve(`${value}`);
  });
  value.then((param) => {
console.log(4);

    console.log(param);
  });
console.log(5);

}
console.log(6);

console.log(new Createpromise('wakeup'))
console.log(7);

console.log(new Createpromise('work'))
console.log(8);

console.log(new Createpromise('sleep'))

console.log(9);

Output:
1 6 3 5 {} 7 2 3 5 {} 8 2 3 5 {} 9 4 wakeup 4 work 4 sleep
```

## Code: JSpromiseprac1 [\[click\]](https://www.sololearn.com/compiler-playground/WLnlaDiVVnyW)

Now, Lets understand the same code with detailed like when and where JS executes,

begin;  
call new Createpromise 1  
enter Createpromise; enter new promise;  
Exit new promise; bottom Createpromise;  
{} end of new Createpromise 1

call new Createpromise 2  
enter Createpromise; enter new promise; Exit new promise; bottom Createpromise;  
{} end of new Createpromise 2

call new Createpromise 3  
enter Createpromise; enter new promise; Exit new promise; bottom Createpromise;  
{} end of new Createpromise 3

enter then; wakeup  
enter then; work  
enter then; sleep

```javascript
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
```

Code: promiseprac2 [\[click\]](https://www.sololearn.com/compiler-playground/WJOqEYkANrd0)

Now, Let's understand with an anology,

The below code shows three people starting for goa trip.

when the Dheeraj person started and he called and everyone joined immediately.

I uses array here to resend two arguments in one function call and used for each method to pick the arguments and assign new promise,

```javascript
let i =0
let timer  = ()=>{
   if(i==5) clearInterval(x)

  console.log(i)
  i++
}

let x = setInterval(timer,1000)
function Goatrip(persons) {
  console.log(i)

  console.log(`call persons`)

persons.forEach(person => {
  person = new Promise((resolve) => {
    return resolve(`${person}`);
  });
  person.then((param) => {
  console.log(i)

    console.log(`${param} just joined`);
  });
});
}
console.log("dheeraj started solo ");
new Goatrip([`rk`,`gskv`]);
```

# Conclusion

Learned and practiced JS promises concepts and explained them with my own example going to trip analogy.

# Code

1. code
    
    ![Alt text](1.%20day81%20code.png)
    

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)