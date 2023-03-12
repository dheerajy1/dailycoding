Today #Day145 of #365DaysOfCode, I am Solving Leet code 1299. Replace Elements with Greatest Element on Right Side.

# Question

Given an array `arr`, replace every element in that array with the greatest element among the elements to its right, and replace the last element with `-1`.

After doing so, return the array.

**Example 1:**

```css
Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
Explanation: 
- index 0 --> the greatest element to the right of index 0 is index 1 (18).
- index 1 --> the greatest element to the right of index 1 is index 4 (6).
- index 2 --> the greatest element to the right of index 2 is index 4 (6).
- index 3 --> the greatest element to the right of index 3 is index 4 (6).
- index 4 --> the greatest element to the right of index 4 is index 5 (1).
- index 5 --> there are no elements to the right of index 5, so we put -1.
```

**Example 2:**

```css
Input: arr = [400]
Output: [-1]
Explanation: There are no elements to the right of index 0.
```

**Constraints:**

* `1 <= arr.length <= 10<sup>4</sup>`
    
* `1 <= arr[i] <= 10<sup>5</sup>`
    

# Answer Leetcode:

```javascript
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = (arr, max = -1, ans = [-1]) => {
  arr = arr.reverse(); /* Time O(N) */

  for (let i = 0; i < arr.length - 1; i++) {
    /* Time O(N) */
    max = Math.max(max, arr[i]);
    ans[i + 1] = max; /* Space O(N) */
  }

  return ans.reverse(); /* Time O(N) */
};
```

# Conclusion

I solved the Leet code 1299. Replace Elements with Greatest Element on Right Side.

# Source: Replace Elements[\[Link\]](https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/) [\[Link\]](https://www.youtube.com/watch?v=ZHjKhUjcsaU)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)