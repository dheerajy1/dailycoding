let nums = [1, 1, 2],
  count = 0;

nums.forEach((val, i, array) => {
  let j = i + 1;
  for (; j < array.length; j++) {
    if ((val === array[j]) & (typeof array[j] != "string")) {
      array[j] = "_";
      count++;
    }
  }
});
console.log(nums, count);

nums = nums.filter((e) => {
  if (typeof e != "string") {
    return e;
  }
});
console.log(nums, count);

console.log(nums);

nums = [...new Set(nums)];
console.log(nums);

/*
for (let i = 0; i <= count; i++) {
  if (typeof nums[i] === "string") {
    for (let j = i; j < nums.length; j++) {
      if (typeof nums[j] === "number") {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        break;
      }
    }
  }
}*/
