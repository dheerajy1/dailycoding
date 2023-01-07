Today #Day82 of #100DaysOfCode, I am learning ES6 JavaScript Promises and explaining by forming my own example.

# JavaScript Promises

JavaScript promises have to arguments and these arguments function type like the resolve function and error function. When a promise is resolved result function is executed and when a promise returns an error function is executed.

Example:

Elon musk had promised to deliver Tesla roadster by 2020, as you know this promise by elon musk was broken that is not resolved but did you wait for this promise? To be precise were you specifically waiting for the Tesla Roadster to get into production or Did you buy a Temporary car?

If you didn't wait but ordered - is analogous to JS will execute a program from top to bottom and keeps the order aside and when its get resolved and will be executed.

Now, Let's say Elon had delivered this car in 2020 so if he had delivered you would had to pay the full amount for the purchase.

Purchasing the car - is analogous to using .then() method to Execute the code of block when it gets resolved.

```javascript
 function promise() {

    function resolve(){ return console.log(10)} 

    return  resolve()
  }
promise()

let wakeup = new Promise((resolve, reject) => {
    return resolve("wakeup");
});
wakeup.then((param) => {
    console.log(param)
})
```

Code: JSpromiprac [\[click\]](https://www.sololearn.com/compiler-playground/WswF55EmTDW6)

Now, if we want to print directly

```javascript
let wakeup = new Promise((resolve, reject)=> {
 resolve(console.log(2,"wakeup"))
});
console.log(1,wakeup)

output :
2 "wakeup" 
1 {}
```

In this example, why 2 is an object because the wakeup is another promise

```javascript
let wakeup = new Promise((resolve, reject) => {
    return resolve("wakeup");
});
console.log(1,wakeup)
wakeup.then((param) => {
    console.log(2,wakeup)
    console.log(3,param)
})
output
1 {}
2 {}
3 "wakeup" 
```

# Now,

The below code is interesting took me a few hours to write,

I struggled to explain promises with the help of an example, in this process I learned a lot and a bit efficient in promises.

Bascially, I want to invite elon and jef to a party and then add a promise because the outcomes are accepted - Boolean value 1 or ignored - 0.

```javascript
let replied = [];

party = {
  giveInvite: function (persons) {
    this.giveInvite = persons;
    return this.giveInvite;
  },

  replied: function (persons, response=0) {
    persons.forEach((person, index) => {
      replied[index] = person;
      replied[index] = new Promise((accepted, ignored) => {
        if (response) accepted(`${person} accepted`);
        else ignored(`${person} ignored`);
      });
    });
    replied.forEach((res) => {
      res
        .then((mess) => {
          console.log(mess);
        })
        .catch((mess) => {
          console.log(mess);
        });
    });
  },
};
party.giveInvite(["Elonmusk", "JefBezos"]);

console.log(party.giveInvite);

party.replied(party.giveInvite,1);
```

## Code: partyjspromise [\[click\]](https://www.sololearn.com/compiler-playground/WUuyX2h53c1J)

# Conclusion

Learned ES6 Promises and explained with an example.

1. JavaScript promises
    
2. object method
    

# Code

1. code
    
    ![Alt text](1.%20day82%20code.png)
    

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)