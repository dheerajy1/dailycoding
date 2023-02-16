Today #Day122 of #365DaysOfCode, Learning Essential JavaScript Interview Questions.

# 11\. **Assuming** `d` **is an “empty” object in scope, say:** `var d = {};`

# …what is accomplished using the following code?

```javascript
[ 'zebra', 'horse' ].forEach(function(k) {
	d[k] = undefined;
});
```

Ans,

```javascript
var d = {};

["zebra", "horse"].forEach(function (k) {
  d[k] = undefined;
});

console.log(d);
console.log(Object.keys(d));
console.log(Object.values(d));


console.log(Object.keys(["zebra", "horse"]));
console.log(Object.values(["zebra", "horse"]));
```

# 12\. **What will the code below output to the console and why?**

```javascript
var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
```

reverse() method returns the array itself.

for non-primitive data types their address will be referenced.

```javascript
var arr1 = 'john'.split('')
var arr2 = arr1.reverse()
var arr3 = 'jones'.split('')
arr2.push(arr3)
console.log(`array 1: lenght = ${arr1.length}; last = ${arr1.slice(-1)}`);
console.log(`array 2: lenght = ${arr2.length}; last = ${arr2.slice(-1)}`);

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(Object.keys(arr2));
console.log(Object.values(arr2));
console.log(arr2[3]);
console.log(arr2[4]);
console.log(arr2[4][0]);
console.log(arr2[4][1]);
console.log(arr2[4][2]);
console.log(arr2[4][3]);
```

output:

```plaintext
array 1: lenght = 5; last = j,o,n,e,s 
array 2: lenght = 5; last = j,o,n,e,s

console.log(arr1);
["n", "h", "o", "j", Array(5)]
    0: "n"
    1: "h"
    2: "o"
    3: "j"
    4: Array(5)
        0: "j"
        1: "o"
        2: "n"
        3: "e"
        4: "s"   
 console.log(arr2);
["n", "h", "o", "j", Array(5)]
    0: "n"
    1: "h"
    2: "o"
    3: "j"
    4: Array(5)
        0: "j"
        1: "o"
        2: "n"
        3: "e"
        4: "s"   
console.log(arr3);
(5) ["j", "o", "n", "e", "s"]
    0: "j"
    1: "o"
    2: "n"
    3: "e"
    4: "s"
console.log(Object.keys(arr2));
(5) ["0", "1", "2", "3", "4"]
    0: "0"
    1: "1"
    2: "2"
    3: "3"
    4: "4"
console.log(Object.values(arr2));
(5) ["n", "h", "o", "j", Array(5)]
    0: "n"
    1: "h"
    2: "o"
    3: "j"
    4: Array(5)
        0: "j"
        1: "o"
        2: "n"
        3: "e"
        4: "s"
console.log(arr2[3]);
j 

console.log(arr2[4]);
(5) ["j", "o", "n", "e", "s"]
    0: "j"
    1: "o"
    2: "n"
    3: "e"
    4: "s"

console.log(arr2[4][0]);
console.log(arr2[4][1]);
console.log(arr2[4][2]);
console.log(arr2[4][3]);
j 
o 
n 
e
```

# Conclusion

Learned and practiced Essential JavaScript Interview Questions involving topics like Objects & reverse() & non-primitive data types with their address reference.

# Code

1. code
    
    ![Alt text](1.%20day122%20code.png)
    

# Source: JavaScript Interview Questions \[[Link](https://www.toptal.com/javascript/interview-questions)\]

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)