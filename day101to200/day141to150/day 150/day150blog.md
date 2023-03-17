Today #Day150 of #365DaysOfCode, I am Solving Leet code 49. Group Anagrams.

# Question

Given an array of strings `strs`, group **the anagrams** together. You can return the answer in **any order**.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Example 1:**

```javascript
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
```

**Example 2:**

```javascript
Input: strs = [""]
Output: [[""]]
```

**Example 3:**

```javascript
Input: strs = ["a"]
Output: [["a"]]
```

**Constraints:**

* `1 <= strs.length <= 10<sup>4</sup>`
    
* `0 <= strs[i].length <= 100`
    
* `strs[i]` consists of lowercase English letters.
    

# Answer Leetcode:

```javascript
var groupAnagrams = (words, map = new Map()) => {
    if (!words.length) return [];

    groupWords(words, map);    /* Time O(N * (K * log(K)) | Space O(N * K) */

    return [ ...map.values() ];/* Time O(N)               | Space O(N * K) */
};

var groupWords = (words, map) => {
    for (const original of words) {/* Time O(N) */
        const sorted = reorder(original);/* Time O(K * log(K)) | Space O(K) */
        const values = map.get(sorted) || [];

        values.push(original);           /*                    | Space O(N) */
        map.set(sorted, values);         /*                    | Space O(N * K) */
    }
}

const reorder = (str) => str
    .split('')                         /* Time O(K)          | Space O(K) */
    .sort((a, b) => a.localeCompare(b))/* Time O(K * log(K)) | Space O(1 || log(K)) */
    .join('');                         /* Time O(K)          | Space O(K) */
```

The `groupAnagrams` function takes in an array of words and creates a new Map object to store the grouped anagrams. If the input array is empty, it returns an empty array.

The `groupWords` function iterates over each word in the input array and calls the `reorder` function on it to get a sorted version of the word. It then checks if this sorted version already exists as a key in the Map object. If it does, it adds the original word to its value (which is an array). If it doesn’t exist yet, it creates a new key-value pair with the sorted version as the key and an array containing only the original word as its value.

Finally, `groupAnagrams` returns all values from map which are arrays containing grouped anagrams.

The `reorder` function takes in a string and returns a new string with its characters sorted alphabetically.

# Conclusion

I solved the Leet code 49. Group Anagrams.

# Source: **49\. Group Anagrams**[\[Link\]](https://leetcode.com/problems/group-anagrams/)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)