Today #Day146 of #365DaysOfCode, I am Solving Leet code 392. Is Subsequence.

# Question

Given two strings `s` and `t`, return `true` *if* `s` *is a* ***subsequence*** *of* `t`*, or* `false` *otherwise*.

A **subsequence** of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., `"ace"` is a subsequence of `"abcde"` while `"aec"` is not).

**Example 1:**

```javascript
Input: s = "abc", t = "ahbgdc"
Output: true
```

**Example 2:**

```javascript
Input: s = "axc", t = "ahbgdc"
Output: false
```

**Constraints:**

* `0 <= s.length <= 100`
    
* `0 <= t.length <= 10<sup>4</sup>`
    
* `s` and `t` consist only of lowercase English letters.
    

# Answer Leetcode:

```javascript
var isSubsequence = function(s, t) {
    
    if(!s.length || (s === t)) return true;
    if(s.length > t.length) return false;
    
    let j = 0;
    
    for(let i = 0; i < t.length; i++) {
        if(s[j] === t[i]) {
            j++;
        }
    }
    return j === s.length;
};
```

# Conclusion

I solved the Leet code 392. Is Subsequence.

# Source: Is Subsequence[\[Link\]](https://leetcode.com/problems/is-subsequence/)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)