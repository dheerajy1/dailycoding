Today #Day148 of #365DaysOfCode, I am Solving Leet code 1. Two Sum.

# Question

Given an array of integers `nums` and an integer `target`, return *indices of the two numbers such that they add up to* `target`.

You may assume that each input would have ***exactly* one solution**, and you may not use the *same* element twice.

You can return the answer in any order.

**Example 1:**

```javascript
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

**Example 2:**

```javascript
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

**Example 3:**

```javascript
Input: nums = [3,3], target = 6
Output: [0,1]
```

**Constraints:**

* `2 <= nums.length <= 10<sup>4</sup>`
    
* `-10<sup>9</sup> <= nums[i] <= 10<sup>9</sup>`
    
* `-10<sup>9</sup> <= target <= 10<sup>9</sup>`
    
* **Only one valid answer exists.**
    

# Answer Leetcode:

```javascript
var twoSum = (nums, target) => {
    for (let curr = 0; curr < nums.length; curr++) {/* Time O(N) */
        const complement = target - nums[curr];

        for (let next = (curr + 1); next < nums.length; next++) {/* Time O(N) */
            const num = nums[next];

            const isTarget = num === complement
            if (isTarget) return [ curr, next ];
        }
    }

    return [ -1, -1 ];
}
```

Explanation,

```sql
for (let curr = 0; curr < nums.length; curr++) {/* Time O(N) */
```

This line initializes a variable `curr` to 0 and iterates through the array `nums` until `curr` is less than the length of the array. The time complexity of this loop is O(N), where N is the length of the input array.

```sql
const complement = target - nums[curr];
```

This line calculates the complement of the current element by subtracting it from the target number.

```sql
for (let next = (curr + 1); next < nums.length; next++) {/* Time O(N) */
```

This line initializes a variable `next` to the next index of the current element and iterates through the remaining elements of the array. The time complexity of this loop is O(N), where N is the length of the input array.

```sql
const num = nums[next];
```

This line assigns the value of the next element to a variable `num`.

```sql
const isTarget = num === complement;
```

This line checks if the current element and the complement add up to the target number.

```sql
if (isTarget) return [ curr, next ];
```

This line returns an array of two indices if the current element and the complement add up to the target number.

```sql
}
}
return [ -1, -1 ];
```

This line returns an array of two -1s if no two elements add up to the target number.

I hope this helps! Let me know if you have any other questions.

# Conclusion

I solved the Leet code 1. Two Sum.

# Source: **1\. Two Sum**[\[Link\]](https://leetcode.com/problems/two-sum/)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)