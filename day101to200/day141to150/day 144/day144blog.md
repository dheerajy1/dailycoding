Today #Day144 of #365DaysOfCode, I am Solving the Leet code Valid Anagram.

# Question

Given two strings `s` and `t`, return `true` *if* `t` *is an anagram of* `s`*, and* `false` *otherwise*.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Example 1:**

```css
Input: s = "anagram", t = "nagaram"
Output: true
```

**Example 2:**

```css
Input: s = "rat", t = "car"
Output: false
```

**Constraints:**

* `1 <= s.length, t.length <= 5 * 10<sup>4</sup>`
    
* `s` and `t` consist of lowercase English letters.
    

# Answer Leetcode:

sorting in lexigraphical,

```javascript
// Define a function to check if two strings are anagrams
var isAnagram = function (s, t) {
  // Sort the characters in string s and store it in sSorted
  const sSorted = s.split("").sort().join("");
  // Sort the characters in string t and store it in tSorted
  const tSorted = t.split("").sort().join("");
  // Return true if sSorted and tSorted are equal, otherwise return false
  return sSorted === tSorted;
};

// Test the isAnagram function with two example cases
console.log(isAnagram("anagram", "nagaram")); // should return true
console.log(isAnagram("cat", "car")); // should return false
```

# Conclusion

I solved the Leet code 242. Valid Anagram.

# Source: Valid Anagram[\[Link\]](https://leetcode.com/problems/valid-anagram/) [\[Link\]](https://www.youtube.com/watch?v=YW-yS-iIPNk)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)