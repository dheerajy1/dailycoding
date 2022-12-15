Today #Day59 of #100DaysOfCode, I am Building a random background color generator.

I pre-designed what I am going to build as shown below,


![backkgroundcolorgen design](backkgroundcolorgen%20design.png)
# 1\. HTML

\-

First Lets Work on JavaScript code.

# 2\. JavaScript

Let's define a values array where values are between 0 - 9 and a letters array as shown,

```javascript
const values = [0,1,2,3,4,5,6,7,8,9]
const letters = ['a','b','c','d','e','f']
```

Next, Let's define a new map to hold these two arrays with keys as shown below,

```javascript
const arrayshold = new Map([
    [1,values],[2,letters]
])
```

Now, Let's define a const random array variable that will store the value of the arrayshold using the get method in map as shown below,

lets the key 2 to test,

```javascript
const randomarray = arrayshold.get(2)
```

yes, It's working,

![1. day59 test case](1.%20day59%20test%20case.png)

Now, Let's Generate this key randomly i.e either 1 or 2,

use size() method,

```javascript
const keyGen = Math.floor(Math.random()*arrayshold.size+1)
const randomarray = arrayshold.get(keygen)
```

Next, Let's generate the array index to pick the index value,

array length depends on the keygen, so let's define an if condition,

```javascript
let arrayLen
if(keyGen===1) arrayLen =  values.length
else arrayLen =  letters.length
```

Then, Let's generate random number placed on the array length from the above code

```javascript
const arrindGen = Math.floor(Math.random()*arrlen)
```

Problem

Problem-1

Getting keygen undefined when I defined an arrow function which takes in the keyGen, Checked the code, and the arraylen is returning null

So, I deleted the arrow function and went ahead with the normal if condition. I Will test again using arrow functions.

# Conclusion

Today I worked on JavaScript code for a Random background color generator. I utilized the JS new Map() method to store the two arrays as key/value pairs.

# Code

1.  JavaScript Code

    ![Day 59 JavaScript Code](3.%20day59%20test%20case%203.png)

# Author: Dheeraj.y

# Connect with me:

*   [My Twitter](https://twitter.com/yssdheeraj)
    
*   [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
*   [My GitHub](https://github.com/dheerajy1)
    
*   [My Hashnode](https://dheerajy1.hashnode.dev/)