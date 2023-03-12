const arr = [17, 18, 5, 4, 6, 1];

var replaceElements = (arr, max = -1, ans = [-1]) => {
  arr = arr.reverse(); /* Time O(N) */

  for (let i = 0; i < arr.length - 1; i++) {
    /* Time O(N) */
    max = Math.max(max, arr[i]);
    ans[i + 1] = max; /* Space O(N) */
  }

  return ans.reverse(); /* Time O(N) */
};
console.log(replaceElements(arr));
