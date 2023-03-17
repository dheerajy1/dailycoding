Today #Day149 of #365DaysOfCode, I am Solving Leet code 14. Longest Common Prefix.

# Question

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

**Example 1:**

```javascript
Input: strs = ["flower","flow","flight"]
Output: "fl"
```

**Example 2:**

```javascript
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```

**Constraints:**

* `1 <= strs.length <= 200`
    
* `0 <= strs[i].length <= 200`
    
* `strs[i]` consists of only lowercase English letters.
    

# Answer Leetcode:

```javascript
// This function finds the longest common prefix of an array of strings
var longestCommonPrefix = function(strs) {
    
    // Set the prefix to the first string in the array
    let pre = strs[0];
    
    // Loop through each string in the array
    for(let word of strs) {
                
        // Loop through each character in the prefix
        for(let i = pre.length - 1; i >= 0; i--) {
                             
            // If the character in the prefix doesn't match the character in the current string, slice the prefix to the current index
            if(pre[i] !== word[i]) {
                pre = pre.slice(0, i);
            }
        }
    }
    
    // Return the longest common prefix
    return pre;
};
```

# Conclusion

I solved the Leet code 14. Longest Common Prefix.

# Source: **14\. Longest Common Prefix**[\[Link\]](https://leetcode.com/problems/longest-common-prefix/)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)