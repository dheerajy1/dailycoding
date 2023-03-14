Today #Day147 of #365DaysOfCode, I am Solving Leet code 58. Length of Last Word.

# Question

Given a string `s` consisting of words and spaces, return *the length of the* ***last*** *word in the string.*

A **word** is a maximal substring.

**Example 1:**

```javascript
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
```

**Example 2:**

```javascript
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
```

**Example 3:**

```javascript
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
```

**Constraints:**

* `1 <= s.length <= 10<sup>4</sup>`
    
* `s` consists of only English letters and spaces `' '`.
    
* There will be at least one word in `s`.
    

# Answer Leetcode:

```javascript
 var lengthOfLastWord = function(s) {
    let len = 0;
    
    for(let i in s) {
        if(s[i] != ' ') {
            if(s[i-1] == ' ') len = 1;
            else len += 1;
        }
    }
    return len;
};
```

# Conclusion

I solved the Leet code Length of Last Word.

# Source: **58\. Length of Last Word**[\[Link\]](https://leetcode.com/problems/length-of-last-word/)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)