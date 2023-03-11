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
