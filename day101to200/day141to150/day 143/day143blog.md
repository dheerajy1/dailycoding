Today #Day143 of #365DaysOfCode, I am Solving Leet code 217. Contains Duplicate.

Example:

```javascript
let arr = [1,2,3,4,5]
console.log(arr);

//const arr2 = new Set(arr)
const arr2 = Array.from(new Set(arr))
console.log(arr2);

const isDup = (x,y)=>{
    console.log(x);
    console.log(y);
    
    // return x.size != y.length
    return x.length != y.length
}
console.log(isDup(arr,arr2));

console.log(arr == arr2);
```

Leetcode:

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const nums2 = new Set(nums)

return nums2.size != nums.length 
};
```

# Conclusion

I solved Leet code 217. Contains Duplicate.

# Source: 217. **Contains Duplicate**[\[Link\]](https://leetcode.com/problems/contains-duplicate/)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)