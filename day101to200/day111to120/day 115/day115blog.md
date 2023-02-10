Today #Day115 of #365DaysOfCode, Learning 10 Tricky JavaScript Coding Interview Questions

# 1\. Given a string, reverse each word in the sentence

```javascript
var string = "Welcome to this Javascript Guide!";

// Output becomes !ediuG tpircsavaJ siht ot emocleW
var reverseEntireSentence = reverseBySeparator(string, "");

// Output becomes emocleW ot siht tpircsavaJ !ediuG
var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}
```

## Code: reverse [\[link\]](https://www.sololearn.com/compiler-playground/WsdJD7AFIG7X)

# 2\. How to empty an array in JavaScript?

```javascript
var arrayList = ["a", "b", "c", "d", "e", "f"];
```

## Method 1

```javascript
arrayList = [];
```

## Method 2

```javascript
arrayList.length = 0;
```

## Method 3

```javascript
arrayList.splice(0, arrayList.length);
```

# 3\. How would you check if a number is an integer?

```javascript
function isInt(num) {
  return num % 1 === 0;
}

console.log(isInt(4)); // true
console.log(isInt(12.2)); // false
console.log(isInt(0.3)); // false
```

## 4\. Explain what a callback function is and provide a simple example

A callback function is a function that is passed to another function as an argument and is executed after some operation has been completed. Below is an example of a simple callback function that logs to the console _after_ some operations have been completed.

```javascript
function modifyArray(arr, callback) {
  // do something to arr here
  arr.push(100);
  // then execute the callback function that was passed
  callback();
}

var arr = [1, 2, 3, 4, 5];

modifyArray(arr, function () {
  console.log("array has been modified", arr);
});
```

## 5\. Given two strings, return true if they are anagrams of one another

An **anagram** of a **string** is another **string** that contains the same characters, only the order of characters can be different. For example, “abcd” and “dabc” are **anagram** of each other.

```javascript
const word1 = "mary",
  word2 = "army";

function checkAnagram(w1, w2) {
  w1 = w1.split("").sort().join("");
  w2 = w2.split("").sort().join("");
  console.log(w1, w2);
  return w1 === w2;
}
const log = checkAnagram(word1, word2);

console.log(log);
```

## Conclusion

Learned and Practised Tricky JavaScript Coding Interview Questions.

# Code

1. code

   ![Alt text](1.%20day115%20code.png)

# Source: JavaScript \[[Link](https://plainenglish.io/blog/10-tricky-javascript-coding-interview-question-with-solution)\]

# Author: Dheeraj.y

# Connect with me:

- [My Twitter](https://twitter.com/yssdheeraj)
- [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
- [My GitHub](https://github.com/dheerajy1)
- [My Hashnode](https://dheerajy1.hashnode.dev/)
