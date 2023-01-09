Today #Day84 of #100DaysOfCode, I am Learning JS promises with an example ' sending invites people' and Interview Questions.

# 1\. Learning JS Promises

A few Days back when I wanted to teach myself promises with the help of an example if I really understand JS promises then I thought of designing a party invite to people and then the outcomes are 1 or 0 or ignored.

Also I wanted to use an array to scale the party invites and I used object methods to call these functions.

It took some days as I wanted to use minimal variable declaration, except the i variable which I used to loop through the responses in order to fill the ignored responses in the response array.

storing party invites in array

```javascript
let party = {
  members: function (r) {
    this.members = r;
  },
}
party.members(["Ross", `Rachel`, `Monica`, `Chandler`, `Joey`, `Phoebe`]);
```

Now, to send invites

```javascript
let party = {
  sendInvite: function () {
    this.sendInvite = this.members;
    this.sendInvite.forEach((eachInvite) => {
      console.log(`Invite sent to ${eachInvite}`);
    });
  },
}
party.sendInvite();
```

Then, responses

I used for loop to the get the missing slots in the responses sparse array,

```javascript
party.recievedResponse([1, 1, 0]);
let party = {

  recievedResponse: function (responses) {
    for (let i = 0; i < responses.length; i++) {
      if (!responses[i] && responses[i] != 0) {
        responses[i] = undefined;
      }
    }
    this.recievedResponse = responses;

    this.sendInvite.forEach((person, index) => {
      this.sendInvite[index] = new Promise((response, ignored) => {
        if (!responses[index] && responses[index] != 0)
          return ignored(`${person} ignored`);
        else return response(`${person}`);
      });
    });
  
  },
}
```

After that,

analysing the responses using . then method,

```javascript
analyseResponse: function () {

    this.members.forEach((member, index) => {
      member.then((res) => {
        this.members[index] = res;
      });
    });
 
    this.sendInvite.forEach((person, index) => {
      person
        .then(() => {
          if (this.recievedResponse[index]) {
            return console.log(`${this.members[index]} accepted`);
          } else {
            return console.log(`${this.members[index]} rejected`);
          }
        })
        .catch((mess) => {
          console.log(mess);
        });
    });
  },
```

## Finally,

I completed what I want to understand promises.

## Code: partypromises [\[click\]](https://www.sololearn.com/compiler-playground/WclvYSS94NO0)

# 2\. JS Promises Interview Questions

## 1\. What is the output of the following code?

The reject() will be caught by the .catch() but after the .catch() will also be executed. before won't be executed.

```javascript
function job() {
    return new Promise(function(resolve, reject) {
        reject();
    });
}
let promise = job();

promise

.then(function() {
    console.log('Success 1');
})

.then(function() {
    console.log('Success 2');
})

.then(function() {
    console.log('Success 3');
})

.catch(function() {
    console.log('Error 1');
})

.then(function() {
    console.log('Success 4');
});
```

## 2\. What is the output of the following code?

In the below question in the let variable promise if the callback function is there with an argument true hence the resolve with success is passed to the .then() so **<mark>success</mark>** string will logged,

and again in the return statement, a callback function with false as argument is passed which will return reject() with error & is passed to catch function which will log this <mark>error</mark> string,

and this catch function is returning error caught string to the next .then() promise in the chain which will log this <mark>error caught</mark> string,

but this then function is returning a callback with true as argument and hence success string is return to the next chain but will not get logged,

```javascript
function job(state) {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

let promise = job(true);

promise

.then(function(data) {
    console.log(data);

    return job(false);
})

.catch(function(error) {
    console.log(error);

    return 'Error caught';
})

.then(function(data) {
    console.log(data);

    return job(true);
})

.catch(function(error) {
    console.log(error);
});
```

The Last .then() promise is in a floating state.

## code: jsinterviewquestions [\[click\]](https://www.sololearn.com/compiler-playground/W8733oecKqEZ)

# Conclusion

Finally, I completed the JS promises ' sending Invites to people' and Interview questions.

# Code

1. code
    
    ![Alt text](1.%20day84%20code.png)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)