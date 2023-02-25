Today #Day131 of #365DaysOfCode, Learning Essential JavaScript Interview Questions.

# 29\. **Imagine you have this code:**

```javascript
var a = [1, 2, 3];
```

**a) Will this result in a crash?** `a[10] = 99;`

**b) What will this output?** `console.log(a[6]);`

a) It will not crash. The JavaScript engine will make array slots 3 through 9 be “empty slots.”

```javascript
var arr = [1,2,3]
console.log(arr);

arr[0] = 45
console.log(arr);

arr.shift()
arr.unshift(1)
console.log(arr);

arr[10] = 89
console.log(arr);
```

b) Here, `a[6]` will output `undefined`, but the slot still remains empty rather than filled with `undefined`. This may be an important nuance in some cases.

For example, when using `map()`, empty slots will remain empty in `map()`’s output, but `undefined` slots will be remapped using the function passed to it:

```javascript
console.log(arr[6]);

var b = [undefined]
b[2] = 1
console.log(b);

b = b.map(e=>7)
console.log(b);


let b2 = [undefined,,1]
b2 = b2.map(e=>{ if(e==1) return 7})
console.log(b2);
```

# 30\. **What is the value of** `typeof undefined == typeof NULL`**?**

The expression will be evaluated to true, since `NULL` will be treated as any other undefined variable.

Note: JavaScript is case-sensitive and here we are using `NULL` instead of `null`.

```javascript
console.log(typeof 1);
console.log(typeof '1');
console.log(typeof '85');
console.log(typeof 'JS');
console.log(typeof undefined);
console.log(typeof null);

console.log(typeof undefined == typeof null);
console.log(typeof undefined == typeof O);
console.log(typeof undefined == typeof object);
console.log(typeof undefined == typeof NULL);
console.log(typeof undefined == typeof 'NULL');
console.log(typeof undefined == typeof 'var');
```

# Conclusion

Learned and practiced Essential JavaScript Interview Questions involving topics like arrays and typeof

# Code

1. code
    
    ![Alt text](1.%20day%20131%20code.png)
    

# Source: JavaScript Interview Questions \[[Link](https://www.toptal.com/javascript/interview-questions)\]

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)