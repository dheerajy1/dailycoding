Today #Day120 of #365DaysOfCode, Learning Essential JavaScript Interview Questions.

# 7\. In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?

```javascript
(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();
```

The values will be logged in the following order:

```plaintext
1
4
3
2
```

The answer has to do with properly understanding [JavaScript events and timing](http://javascript.info/tutorial/events-and-timing-depth).

# 8\. Write a simple function (less than 160 characters) that returns a boolean indicating whether or not a string is a palindrome.

The following one line function will return `true` if `str` is a palindrome; otherwise, it returns false.

```js
function isPalindrome(str){
    str = str.replace(/\W/g,'').toLowerCase()
    console.log(str);
    console.log(str.split('a'));
    console.log(str.split('').reverse());
    console.log(str.split('').reverse().join(''));
    return str === str.split('').reverse().join('')
}
console.log(isPalindrome('A car, a man, a maraca'))
```

For example:

```js
console.log(isPalindrome("level"));                   // logs 'true'
console.log(isPalindrome("levels"));                  // logs 'false'
console.log(isPalindrome("A car, a man, a maraca"));  // logs 'true'
```

# Conclusion

Learned and practiced Essential JavaScript Interview Questions involving topics like setTimeout and Palindrome.

# Code

1. code
    
    ![Alt text](1.%20day120%20code.png)
    

# Source: JavaScript Interview Questions \[[Link](https://www.toptal.com/javascript/interview-questions)\]

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)